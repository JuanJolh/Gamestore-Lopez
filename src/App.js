import './App.css';
import Nav from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/footer';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart';
import Provider from './components/context/Context';
import Checkout from './components/Checkout';


function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:id" element={<ItemListContainer />} />
            <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;