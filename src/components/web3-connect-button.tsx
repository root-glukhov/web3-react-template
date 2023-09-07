import { useConnectWallet, useSetChain } from '@web3-onboard/react'
import { ethers } from 'ethers'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

import { LogOut } from 'lucide-react'
import { useState } from 'react'


export default function Web3ConnectButton() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [ { chains, connectedChain }, setChain ] = useSetChain()
  const [cur_chain_id, setCurChainId] = useState('0x5');
  let cur_chain = chains.find(x => x.id === cur_chain_id)

  // create an ethers provider
  let ethersProvider

  let symbol_address
  let short_address

  if (wallet) {
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')

    let address = wallet.accounts[0].address
    symbol_address = address.substring(address.length - 2)
    short_address = address.substring(0, 5) + '...' + address.substring(address.length - 4)
  }

  return (
    <>
    <div className='flex'>
      <div className='mr-2'>
      <Select value={connectedChain?.id}
        onValueChange={(value) => {
          setChain({ chainId: value })
          setCurChainId(value)
      }}>
        <SelectTrigger className="w-[120px]">
          <div className='flex truncate'>
            <img src={cur_chain?.icon} className='w-5 mr-1' alt=''/>
            {cur_chain?.label}
          </div>
        </SelectTrigger>
        <SelectContent>
        {chains.map(({ id, label, icon }) => {
          return (
            <SelectItem value={id}>
              <div className='flex truncate'>
                <img src={icon} className='w-5 mr-1' alt='' />
                {label}
              </div>
            </SelectItem>
          )
        })}
        </SelectContent>
      </Select>
    </div>

    {(wallet ?
      <div className='mr-5'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{symbol_address}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{short_address}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => disconnect(wallet)}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    
    :
      <Button variant="outline" disabled={connecting} onClick={() => connect()}>
        {connecting ? 'connecting' : 'connect'}
      </Button>
    )}

    </div>
    </>
  )
}