

import './App.css';

import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/header';
import Trailer from './components/Trailer/Trailer';
import Reviews from './components/Reviews/Reviews';
import axios from 'axios';

function App() {
  const [movies,setMovies]=useState();
  const [movie,setMovie]=useState();
  const [reviews,setReviews]=useState([])
  console.log(movies);
  
  let url="https://c701-2405-201-c049-7091-688c-48d6-9c7-d239.ngrok-free.app/api/v1/movies"
  const getMovies=async()=>{

    try
    {
   // let url="https://378f-2405-201-c049-7091-2cdf-6ec7-b15b-9e45.ngrok-free.app/api/v1/movies"
      // let u="http://localhost:8080/api/v1/movies"
      console.log("--------------");
      const response = await api.get(url);
      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }



  
  const getMovieData = async (movieId) => {
     
    try 
    {
    
      console.log("&&",url+`/${movieId}`);
        const response = await api.get(url+`/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);
      
        setReviews(singleMovie.reviewIds);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }


  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
     
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path='/' element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
