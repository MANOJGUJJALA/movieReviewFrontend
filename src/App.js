
import axios from 'axios';
import './App.css';

import api from './api/axiosConfig';
import { useState,useEffect } from 'react';

function App() {
  const [movies,setMovies]=useState();

  const getMovies=async()=>{

    try
    {
      let url="https://378f-2405-201-c049-7091-2cdf-6ec7-b15b-9e45.ngrok-free.app/api/v1/movies"
      
      const response = await api.get(url);
      console.log(response.data);
      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <h1>Hai hello</h1>
    </div>
  );
}

export default App;
