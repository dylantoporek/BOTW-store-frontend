import React from "react";
import Item from "./Item";
import './App.css';

function Store({stores, onDeleteItem, onSellItem, onBuyItem, inventory}){

    let storeDisplay = stores.map((store) => {
        return <div key={store.name} className="store">
            <h3>{store.name}</h3>
            <Item
                inventory={inventory} 
                store={store}
                onSellItem={onSellItem} 
                onBuyItem={onBuyItem} 
                onDeleteItem={onDeleteItem}
            />
        </div>
    })

return (
    <div id="store-container">
        {storeDisplay}
    </div>
)
}

export default Store