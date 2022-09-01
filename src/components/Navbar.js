import React from "react";
import Cart from "./CartWidget";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand  ms-5" href="#"><i className="fa-brands fa-js"></i> React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tienda</a>
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row me-5">
        <li className="nav-item me-3 me-lg-0">
          <Cart />
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    )
}

export default Nav;