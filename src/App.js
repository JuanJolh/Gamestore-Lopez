import logo from './logo.png';
import './App.css';
import Nav from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Nav/>

      <ItemListContainer  />
      <ItemDetailContainer />
    </div>
  );
}

export default App;