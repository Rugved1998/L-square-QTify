import { StyledEngineProvider } from '@mui/material';
import '../src/styles/Theme.css';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './API/api';
// import logo from './logo.svg';
import './App.css';
// import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import React, {useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';



function App() {
  const [searchData, useSearchData]=useState();
  const [data, setData]=useState({});

  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>{
       
        return {...prevData, [key]:data};
      });
    });
    
  };

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);

   
   
  },[]);

  const{topAlbums=[], newAlbums=[], songs=[]}= data;

  

  return (
    <div >
      {/* Default code provided by React*/ }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> This is poopins Text</p>
      </header>
      <p> This is poopins Text</p> */}
      {/* <Logo></Logo> */}

      <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums,...newAlbums]} />
      {/* <Hero /> */}
      <Outlet context={{data: {topAlbums,newAlbums,songs}}}/>
      </StyledEngineProvider>
    </div>
  );
}


export default App;
