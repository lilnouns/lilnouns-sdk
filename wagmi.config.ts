import { defineConfig } from '@wagmi/cli'
import { actions, fetch, react } from '@wagmi/cli/plugins'
import changeCase from 'change-case'

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
    getCacheKey({ contract }: { contract: any }) {
      // Define type for contract
      return `${changeCase.camelCase(name)}_m:${JSON.stringify(
        contract.address,
      )}`
    },
    async parse({ response }) {
      const json: any = await response.json()
      if (json.status === '0') throw new Error(json.message)
      return JSON.parse(json.result)
    },
    request(contract: any) {
      // Define type for contract
      if (!contract.address) throw new Error('address is required')
      const address = contract.address
      const baseUrl = 'https://api.etherscan.io'
      return {
        url: `${baseUrl}/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`,
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
    }),
    actions(),
    react(),
  ],
})
