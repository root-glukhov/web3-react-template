import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'


export const initWeb3Onboard = init({
    connect: {
        autoConnectAllPreviousWallet: true
    },
    appMetadata: {
        name: 'Binjet web3 demo',
        icon: '<svg>App Icon</svg>',
        description: 'A demo of Web3-Binjet.'
    },
    wallets: [
        injectedModule()
    ],
    chains: [
        {
            id: '0x5', // 5
            token: 'ETH',
            label: 'Ethereum Goerli',
            rpcUrl: `https://eth-goerli.g.alchemy.com/v2/-Ipz8WdW6f9UzsnaHNFGEOHtsHBlHrzW`,
            icon: 'Ethereum.png'
        },
        {
            id: '0x66eed', // 421613
            token: 'ETH',
            label: 'Arbitrum Goerli',
            rpcUrl: `https://arb-goerli.g.alchemy.com/v2/e5SCH-yKWgsu4VNGkRtyoxyCIONmeg74`,
            icon: 'Arbitrum.png'
        },
        {
            id: '0x118', // 280
            token: 'ETH',
            label: 'ZkSync Era Testnet',
            rpcUrl: 'https://zksync2-testnet.zksync.dev',
            icon: 'ZkSyncEra.png',
            blockExplorerUrl: 'https://goerli.explorer.zksync.io/'
        }
    ],
    accountCenter: { 
        desktop: {
            enabled: false
        },
        mobile: {
            enabled: false
        }
    },
    theme: 'system'
})