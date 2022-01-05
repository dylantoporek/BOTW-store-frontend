import React, {useEffect, useState} from 'react';
import './App.css';
import Store from './Store';
import Item from './Item';

function App() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stores")
    .then(res => res.json())
    .then(data => {
      data.forEach((result) => {
        fetchStoreData(result.id)
      })
    })
  }, [])

  function fetchStoreData(id){
    fetch(`http://localhost:9292/stores/${id}`)
    .then(res => res.json())
    .then(data => {
      setStores((prevDataArr)=>[...prevDataArr, data])
    })
  }

  console.log(stores)

  return (
    <div>
      <Store/>
      <Item/>
    </div>
  );
}

export default App;
