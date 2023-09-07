import { useSetChain } from '@web3-onboard/react';
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

type Props = {
    wallet: any
    // chains: [];
    // connectedChain: any;
    // setChain: () => void;
}

export default function ChainChanger({ wallet/*chains, connectedChain, setChain*/ }: Props) {
    const [ { chains, connectedChain }, setChain ] = useSetChain()
    const [cur_chain, setCurChain] = useState<any>(chains[0]);

    useEffect(() => {
        if(!wallet)
            return;
        
        setCurChain(chains.find(x => x.id === connectedChain?.id))
    }, [connectedChain])

    return (
    <>
        <Select value={connectedChain?.id}
          onValueChange={(value) => {
            setCurChain(chains.find(x => x.id === value));

            if(wallet)
                setChain({ chainId: value });
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
                <SelectItem value={id} key={id}>
                  <div className='flex truncate'>
                    <img src={icon} className='w-5 mr-1' alt='' />
                    {label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
    </>
    )
}