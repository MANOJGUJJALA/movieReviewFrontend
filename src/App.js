

import './App.css';

import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';



function App() {
  const [movies,setMovies]=useState();
  console.log(movies);
  
  const getMovies=async()=>{

    try
    {
      let url="https://378f-2405-201-c049-7091-2cdf-6ec7-b15b-9e45.ngrok-free.app/api/v1/movies"
      console.log("--------------");
      const response = await api.get(url);
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
     
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path='/' element={<Home movies={movies}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
