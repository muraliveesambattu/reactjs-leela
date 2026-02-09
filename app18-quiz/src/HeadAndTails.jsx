import React, { useState } from 'react'
import { FlipCoinComp } from './FlipCoinComp';

export const HeadAndTails = () => {
    const [coin, setCoin] = useState(0);
 

    const handleFlip=()=>{
        const num = Math.round(Math.random());
        setCoin(num)
    }
    return (
        <div>
            <FlipCoinComp coin={coin}/>
            <button onClick={handleFlip}>Flip</button>
        </div>
    )
}
