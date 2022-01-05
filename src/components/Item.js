import React from "react";
import './App.css';

function Item({store}){

    let stockDisplay = store.stocks.map((stock) => {
            return <div key={stock.item.name}>
                <button>Buy</button>
                <p>Name: {stock.item.name}</p>
                <p>Quantity: {stock.quantity}</p>
                <p>Price: {stock.item.price}</p>
                <button>Sell</button>
            </div>
        })

return (
    <div>{stockDisplay}</div>
)
}

export default Item