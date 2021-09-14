import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState } from 'react';

function App() {
  const[data,setData]=useState([]);
  const getData=()=>{
    return axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(function (response) {
      // handle success
      setData(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const delCard=()=>{
    setData(data.slice(1));
  }
  return (
    <div className="App">
      <button onClick={getData}>hi</button>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={delCard}>bye</button>
    </div>
  );
}

export default App;

