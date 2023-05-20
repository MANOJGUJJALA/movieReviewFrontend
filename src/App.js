

import './App.css';

import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/header';
import Trailer from './components/Trailer/Trailer';
import Reviews from './components/Reviews/Reviews';

function App() {
  const [movies,setMovies]=useState();
  const [movie,setMovie]=useState();
  const [reviews,setReviews]=useState()
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



  
  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

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
