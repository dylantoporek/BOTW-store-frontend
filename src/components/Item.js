import React, {useState} from "react";
import './App.css';

function Item({store, onBuyItem, onSellItem, onDeleteItem, inventory}){

    function handleBuy(e){
        let stock = store.stocks.filter((stock) => stock.item.name === e.target.value)
        onBuyItem(stock) 
    }

    function handleSell(e){
        let stock = store.stocks.filter((stock) => stock.item.name === e.target.value)
        onSellItem(stock)
    }

    function handleDelete(e){
        let stock = store.stocks.filter((stock) => stock.item.name === e.target.value)
        onDeleteItem(stock)
    }

    let stockDisplay = store.stocks.map((stock) => {
            return <div key={stock.item.name} id={stock.id} className="stock">
            <p>Name: {stock.item.name}</p>
            <p>Quantity: {stock.quantity}</p>
            <p>Price: {stock.item.price}</p>
            <button value={stock.item.name} onClick={handleBuy}>Buy</button>
            <button value={stock.item.name} onClick={handleSell}>Sell</button>
            <button value={stock.item.name} onClick={handleDelete}>Delete Stock</button>
        </div>        
    })

return (
    <div id="stock-container">{stockDisplay}</div>
)
}

export default Item