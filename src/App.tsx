import './App.css'
import Footer from './components/footer'
import Home from './components/home'
import { ThemeProvider } from "@/components/theme-provider"
import { Web3OnboardProvider, useConnectWallet } from '@web3-onboard/react'
import { useEffect, useState } from 'react'
import { BrowserProvider, ethers } from 'ethers'
import { initWeb3Onboard } from './services'
import Navbar from './components/Navbar'
import { Toaster } from './components/ui/toaster'

function App() {
  // const [web3Onboard, setWeb3Onboard] = useState<any>(null)
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [ethersProvider, setEthersProvider] = useState<any>(null)
  // let ethersProvider


  // useEffect(() => setWeb3Onboard(initWeb3Onboard), []);
  useEffect(() => { initWeb3Onboard }, [])

  useEffect(() => {
    if (wallet) {
      setEthersProvider(new ethers.BrowserProvider(wallet.provider, 'any'));
    }
  }, [wallet]);

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {/* <Web3OnboardProvider web3Onboard={web3Onboard}> */}
          <div className="flex flex-col h-screen justify-between">
            <Navbar 
              connect={connect}
              connecting={connecting}
              disconnect={disconnect} 
              wallet={wallet} />
            <div className='mb-auto'>
              <Home ethersProvider={ethersProvider} />
            </div>
            <div className=''><Footer /></div>
          </div>
        {/* </Web3OnboardProvider> */}
        <Toaster />
      </ThemeProvider>
      
    </>
  )
}

export default App
