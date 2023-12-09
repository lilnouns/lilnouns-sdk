import { defineConfig } from '@wagmi/cli'
import { actions, fetch, react } from '@wagmi/cli/plugins'
import changeCase from 'change-case'
import { default as fetch_ } from 'node-fetch'

function etherscan({ apiKey, name }: { apiKey?: string; name: string }) {
  return fetch({
    contracts: [
      {
        name: 'Token',
        address: '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B',
      },
      {
        name: 'Auction',
        address: '0x55e0F7A3bB39a28Bd7Bcc458e04b3cF00Ad3219E',
      },
      {
        name: 'Treasury',
        address: '0xd5f279ff9EB21c6D40C8f345a66f2751C4eeA1fB',
      },
      {
        name: 'Governor',
        address: '0x5d2C31ce16924C2a71D317e5BbFd5ce387854039',
      },
    ],
    getCacheKey({ contract }) {
      return `${changeCase.camelCase(name)}:${JSON.stringify(contract.address)}`
    },
    async parse({ response }) {
      const json: any = await response.json()
      if (json.status === '0') throw new Error(json.message)
      return JSON.parse(json.result)
    },
    request(contract) {
      if (!contract.address) throw new Error('address is required')

      const address = contract.address
      const baseUrl = 'https://api.etherscan.io/api'
      const urlQuery = `module=contract&action=getsourcecode&address=${address}&apiKey=${apiKey}`

      return fetch_(`${baseUrl}?${urlQuery.toString()}`)
        .then((response) => response.json())
        .then((json: any) => {
          let urlQuery = `module=contract&action=getabi&address=${address}&apiKey=${apiKey}`
          if (json.status === '1' && json.message === 'OK') {
            const { Proxy, Implementation } = json.result[0]
            const sourceAddress =
              Proxy === '1' && Implementation ? Implementation : address
            urlQuery = `module=contract&action=getabi&address=${sourceAddress}&apiKey=${apiKey}`
          } else {
            throw new Error('Error fetching contract source')
          }
          return {
            url: `${baseUrl}?${urlQuery.toString()}`,
          }
        })
        .catch((error) => {
          throw new Error('Server error: ' + error)
        })
    },
  })
}

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    etherscan({
      name: 'Etherscan',
      apiKey: process.env.ETHERSCAN_API_KEY,
    }),
    actions({
      getContract: true,
      prepareWriteContract: false,
      readContract: false,
      watchContractEvent: false,
      writeContract: false,
    }),
    react({
      useContractRead: true,
      useContractWrite: true,
      useContractEvent: true,
      useContractFunctionRead: false,
      useContractFunctionWrite: false,
      useContractItemEvent: false,
      usePrepareContractFunctionWrite: false,
      usePrepareContractWrite: false,
    }),
  ],
})
