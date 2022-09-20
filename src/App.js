import './App.css';
import Nav from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/footer';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:cat" element={<ItemListContainer />} />
            <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;