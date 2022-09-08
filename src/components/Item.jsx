import React from "react";

const Item = ({id, nombre, marca, imagen, precio}) => {
    return (
            <div className="card">
                <img src={imagen} className="card-img-top" width="200" height="300" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Marca: {marca}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
            </div>
    )
}

export default Item;