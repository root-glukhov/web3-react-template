import { ModeToggle } from "./mode-toogle"
import LogoSvg from "@/assets/logo-no-background.svg"
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import ChainChanger from "./ChainChanger";

type Props = {
  connect: () => void;
  connecting: boolean;
  disconnect: (wallet: any) => void;
  wallet: any;
}

export default function Navbar({ connect, connecting, disconnect, wallet }: Props) {
  const [symbol_address, setSymbolAddress] = useState("0x");
  const [short_address, setShortAddress] = useState("");

  useEffect(() => {
    if(!wallet)
      return;

    const { address } = wallet.accounts[0];
    setSymbolAddress(address.substring(address.length - 2));
    setShortAddress(`${address.substring(0, 5)}...${address.substring(address.length - 4)}`);
  }, [wallet])

  return (
  <div className="p-4 flex justify-center rounded-lg">
    <img src={LogoSvg} className="w-40" alt="" />
    <div className="flex-grow"></div>

    <div className="flex">
      <div className='mr-2'>
        <ChainChanger wallet={wallet} />
      </div>

      <div className="m-auto mr-2">
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
      <div className="m-auto mr-0">
        <ModeToggle />
      </div>
    </div>
  </div>
  )
}