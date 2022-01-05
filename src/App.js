import React, {useEffect, useState} from 'react';
import './App.css';

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
    .then(data => console.log(data))
  }
  
  return (
    <div>
    </div>
  );
}

export default App;
