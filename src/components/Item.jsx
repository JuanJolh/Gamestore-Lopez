import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
            <div className="card">
                <Link to={"/producto/" + item.id}><img src={item.imagen} className="card-img-top" width="200" height="300" alt={item.nombre} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <Link to={"/producto/" + item.id} className="btn btn-primary">Ver Más</Link>
                    
                </div>
            </div>
    )
}

export default Item;