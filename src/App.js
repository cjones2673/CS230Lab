import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
      <h1>CS 230L</h1>
        <h2>Section - 001</h2>
          <p>WVU ID: 800382612</p>
          <p>Hi I am Christopher Jones</p>

      <Card />
      
    </div>
  );
}

export default App;
