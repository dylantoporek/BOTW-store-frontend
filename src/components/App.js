import React, {useEffect, useState} from 'react';
import './App.css';
import Store from './Store';
import Item from './Item';

function App() {
  const [stores, setStores] = useState([])
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stores")
    .then(res => res.json())
    .then(data => {
      data.forEach((result) => {
        fetchStoreData(result.id)
      })
    })

    fetch("http://localhost:9292/stocks")
    .then(res => res.json())
    .then(data => {
      setInventory(data)
    })
  }, [])

  function fetchStoreData(id){
    fetch(`http://localhost:9292/stores/${id}`)
    .then(res => res.json())
    .then(data => {
      setStores((prevDataArr)=>[...prevDataArr, data])
    })
  }

  function handleDeleteItem(id){
    console.log(id)
  }

  function handleSellItem(id){
    console.log(id)
  }

  function handleBuyItem(id){
    console.log(id)
  }


  return (
    <div>
      <h1>Welcome to the BOTW Online Store</h1>
      <Store
        stores={stores} 
        onDeleteItem={handleDeleteItem} 
        onSellItem={handleSellItem} 
        onBuyItem={handleBuyItem}
        inventory={inventory}
        />
    </div>
  );
}

export default App;
