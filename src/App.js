import logo from './logo.png';
import './App.css';
import Nav from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

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

      <ItemListContainer  />
    </div>
  );
}

export default App;