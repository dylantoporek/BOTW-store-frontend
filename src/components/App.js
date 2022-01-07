import React, {useEffect, useState} from 'react';
import './App.css';
import Store from './Store';

function App() {
  const [stores, setStores] = useState([])
  const [inventory, setInventory] = useState([])

  console.log(stores)

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

  function handleDeleteItem(deletedStock){
    fetch(`http://localhost:9292/stocks/${deletedStock[0].id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(stockD => {
      const copyOfStores = [...stores]
      const storeToUpdate = copyOfStores.find(store => store.id === stockD.store_id)
      storeToUpdate.stocks = storeToUpdate.stocks.filter((stock) => stock.id !== stockD.id)
      setStores(copyOfStores)
    })
  }

  function handleSellItem(stock){
    const newQuantity = stock[0].quantity + 1
    console.log(newQuantity)
    fetch(`http://localhost:9292/stocks/${stock[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quantity: newQuantity})
    })
    .then(res => res.json())
    .then(stockD => {
      const copyOfStores = [...stores]
      const storeToUpdate = copyOfStores.find(store => store.id === stockD.store_id)
      storeToUpdate.stocks = storeToUpdate.stocks.filter((stock) => stock.id !== stockD.id)
      storeToUpdate.stocks.push(stockD)
      setStores(copyOfStores)
    })
    
    
  }

  function handleBuyItem(stock){
    const newQuantity = stock[0].quantity - 1
    console.log(newQuantity)
    fetch(`http://localhost:9292/stocks/${stock[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quantity: newQuantity})
    })
    .then(res => res.json())
    .then(stockD => {
      const copyOfStores = [...stores]
      const storeToUpdate = copyOfStores.find(store => store.id === stockD.store_id)
      storeToUpdate.stocks = storeToUpdate.stocks.filter((stock) => stock.id !== stockD.id)
      storeToUpdate.stocks.push(stockD)
      setStores(copyOfStores)
    })
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
