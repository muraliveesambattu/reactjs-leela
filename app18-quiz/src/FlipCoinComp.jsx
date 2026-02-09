import React from 'react'

export const FlipCoinComp = ({ coinSides = [
    {
        type: "HEAD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZzaR-NzCh2cG3LzRqTqW55LYQzhl-7Bvmg&s"
    },
    {
        type: "TAIL",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Indian_1_Rupee_Coin_Reverse_or_Tails.jpg"
    }
], coin }) => {
    return (
        <div>
            <img src={coinSides[coin].image} alt="" style={{ width: '200px' }} />
        </div>
    )
}
