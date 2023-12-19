import '../src/styles/Theme.css';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div >
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
      <SearchBar placheholder={"Search a album of your choice"}></SearchBar>
      <Button> Give Feedback</Button>
    </div>
  );
}

export default App;
