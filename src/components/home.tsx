import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { BigNumberish, ethers, BrowserProvider } from "ethers";
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import abi from '@/assets/TicketSale.json'

type Props = {
  ethersProvider: BrowserProvider
}

export default function Home({ ethersProvider }: Props) {
  // const [transactionHash, setTransactionHash] = useState<string | null>(null);
  // const { toast } = useToast()
  // const [walletTickets, setWalletTickets] = useState(0)
  // const [tickets, setTickets] = useState('')
  // const [gasLimit, setGasLimit] = useState('')

  // useEffect(() => {
  //   updateWalletTickets();

  //   updateGasLimit()
  // }, [ethersProvider]);

  // const updateWalletTickets = async () => {
  //   if(!ethersProvider)
  //     return;

  //   let signer = await ethersProvider.getSigner()
  //   const contract = new ethers.Contract('0x84217C244Dea47024BBB1785a03a8ed7d7CBf224', abi, ethersProvider); // создаем объект контракта
  //   const result = await contract.getTickets(signer.address);
  //   setWalletTickets(Number(result))
  // }

  // const updateGasLimit = async () => {
  //   if(!ethersProvider)
  //     return;

  //   let signer = await ethersProvider.getSigner()

  //   const contract = new ethers.Contract('0x84217C244Dea47024BBB1785a03a8ed7d7CBf224', [
  //     {
  //       name: 'buyTickets',
  //       type: "function",
  //       inputs: [
  //         { type: "uint256", name: "_amount" },
  //       ]
  //     },
  //   ], signer);

  //   const tx = {
  //     to: '0x84217C244Dea47024BBB1785a03a8ed7d7CBf224', // адрес контракта
  //     data: contract.interface.encodeFunctionData('buyTickets', [Number(tickets)]) // закодированные данные функции
  //   };
  //   const estimateGas = await ethersProvider.estimateGas(tx);
  //   const { gasPrice } = await ethersProvider.getFeeData()
  //   if(!gasPrice) {
  //     return;
  //   }
      

  //   const txCost = estimateGas * gasPrice;
  //   const result = ethers.formatEther(txCost);
  //   setGasLimit(`${result.toString()} ETH`);
  // } 

  // const sendTx = async () => {
  //   if(!ethersProvider) {
  //     console.log('etherProvider is null')
  //     return;
  //   }

  //   let signer = await ethersProvider.getSigner()

  //   const contract = new ethers.Contract('0x84217C244Dea47024BBB1785a03a8ed7d7CBf224', [
  //     {
  //       name: 'buyTickets',
  //       type: "function",
  //       inputs: [
  //         { type: "uint256", name: "_amount" },
  //       ]
  //     },
  //   ], signer);

  //   try {
  //     const txResponse = await contract['buyTickets'](
  //       Number(tickets), 
  //       { 
  //         value: ethers.parseEther((0.001 * Number(tickets)).toString())
  //       }
  //     );
  //     const txHash = txResponse.hash;
  //     setTransactionHash(txHash);
  //     console.log(txResponse)

  //     toast({
  //       title: "Transaction waiting",
  //       description: <>
  //         <div className='flex'>
  //           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  //           Please wait
  //         </div>
  //       </>
  //     })
      
  //     const receipt = await txResponse.wait();
  //     console.log(receipt)
  //     toast({
  //       title: "Transaction success",
  //       description: `Hash tx: ${receipt.hash}`,
  //     });

  //     updateWalletTickets();
  //   } catch (ex) {
  //     if (ex instanceof Error) {
  //       console.error(ex)
  //       toast({
  //         variant: "destructive",
  //         title: "Transaction error",
  //         description: 'See the console for details.',
  //       })
  //     }
  //   }
  // }

  return (
    <div className="mt-4 p-4 bg-neutral-100 dark:bg-slate-700 h-96 rounded-lg">
      {/* <p className="text-xl font-semibold">The lottery hasn't started yet</p>
      <p className="text-sm text-muted-foreground">0 players</p>
      <Separator className="my-4" />

      <div className="flex-wrap">
        <p className="font-semibold">
          You have <span className="text-red-400">{walletTickets}</span> tickets
        </p>

        <div className="flex justify-center mt-2">  
          <Input 
            type="number" 
            placeholder="Tickets" 
            className="w-32 mr-2" 
            value={tickets} 
            onChange={(event) => setTickets(event.target.value)} 
          />
          <div className="text-left mt-1">
            <h4 className="text-sm font-medium leading-none">
              {0.001 * Number(tickets)} ETH
            </h4>
            <p className="text-sm text-muted-foreground">
              Fee: {gasLimit}
            </p>
          </div>
        </div>
          
        <Button className="self-start w-28 mt-4" onClick={() => sendTx()}>Get tickets</Button>
      </div> */}
    </div>
  )
}