import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nicholas Nevins</h1>
        <p>
        A results-driven software developer with a strong technical skillset. 
        Excels at problem solving, learning new skills quickly, and possesses 
        a strong background in customer service and team-building. Consistently 
        recognized for abilities to train and teach others as a functional member 
        of a team. Strong written and verbal interpersonal communication skills. 
        Team player with the ability to work independently. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;
