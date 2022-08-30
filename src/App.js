import logo from './logo.png';
import './App.css';
import Nav from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>GameStore</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
