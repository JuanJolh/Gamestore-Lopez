import React from "react";
import Cart from "./CartWidget";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand  ms-5" to={"/"}><i className="fa-solid fa-gamepad"></i> GameStore</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/categoria/consola"}>Consolas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/categoria/accesorios"}>Accesorios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/categoria/videojuego"}>Videojuegos</Link>
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