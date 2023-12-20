import '../src/styles/Theme.css';
// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import React, {useState} from "react";


function App() {
  const [searchData, setSearchData]=useState();

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
      <Navbar searchData={searchData}></Navbar>
      <Hero />
    </div>
  );
}

export default App;
