import { ContractConfig, defineConfig } from '@wagmi/cli'
import { actions, fetch, react } from '@wagmi/cli/plugins'
import { camelCase } from 'change-case'
import { default as _fetch } from 'node-fetch'

function etherscan({
  apiKey,
  name,
  contracts,
}: {
  apiKey?: string
  name: string
  contracts: Omit<ContractConfig, 'abi'>[]
}) {
  return fetch({
    contracts: contracts,
    getCacheKey({ contract }) {
      return `${camelCase(name)}:${JSON.stringify(contract.address)}`
    },
    async parse({ response }) {
      const { message, result, status }: any = await response.json()
      if (status === '0') throw new Error(message)
      return JSON.parse(result)
    },
    async request(contract) {
      if (!contract.address) throw new Error('address is required')

      const address = contract.address
      const baseUrl = 'https://api.etherscan.io/api'
      const urlQuery = `module=contract&action=getsourcecode&address=${address}&apiKey=${apiKey}`

      try {
        const response = await _fetch(`${baseUrl}?${urlQuery.toString()}`)
        const { message, result, status }: any = await response.json()

        let abiUrlQuery = `module=contract&action=getabi&address=${address}&apiKey=${apiKey}`
        if (status === '1' && message === 'OK') {
          const { Proxy, Implementation } = result[0]
          const sourceAddress =
            Proxy === '1' && Implementation ? Implementation : address
          abiUrlQuery = `module=contract&action=getabi&address=${sourceAddress}&apiKey=${apiKey}`
        }

        return {
          url: `${baseUrl}?${abiUrlQuery.toString()}`,
        }
      } catch (error) {
        throw new Error('Server error: ' + error)
      }
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
