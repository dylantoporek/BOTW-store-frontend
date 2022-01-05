import React from "react";
import Item from "./Item";
import './App.css';

function Store({stores}){
    console.log(stores)
    let storeDisplay = stores.map((store) => {
        return <div key={store.id}>
            <h3>{store.name}</h3>
            <Item store={store}/>
        </div>
    })

return (
    <div>
        {storeDisplay}
    </div>
)
}

export default Store