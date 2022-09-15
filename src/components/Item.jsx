import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, nombre, marca, imagen, precio}) => {
    return (
            <div className="card">
                <Link to={"/producto/" + id}><img src={imagen} className="card-img-top" width="200" height="300" alt={nombre} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Marca: {marca}</p>
                    <p className="card-text">Precio: ${precio}</p>
                    <Link to={"/producto/" + id} className="btn btn-primary">Ver Más</Link>
                </div>
            </div>
    )
}

export default Item;