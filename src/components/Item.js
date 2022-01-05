import React, {useState} from "react";
import './App.css';

function Item({store, onBuyItem, onSellItem, inventory}){


    function handleBuy(e){
        console.log(inventory)
    }

    function handleSell(e){
        console.log(e.target.item)
    }

    let stockDisplay = store.stocks.map((stock) => {
            return <div key={stock.id} id={stock.id}>
                <p>Name: {stock.item.name}</p>
                <p>Quantity: {stock.quantity}</p>
                <p>Price: {stock.item.price}</p>
                <button onClick={handleBuy}>Buy</button>
                <button onClick={handleSell}>Sell</button>
                <button>Delete Stock</button>
            </div>
        })


return (
    <div>{stockDisplay}</div>
)
}

export default Item