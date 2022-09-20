import React from "react";
import ItemCount from "./ItemCount"
import { useState} from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0);
    const onAdd = (counter) => {
        setCounter(counter);
    }

        return (
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={item.imagen} className="d-block mx-lg-auto img-fluid" alt={item.nombre} width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{item.nombre}</h1>
                        <p className="lead">{item.descripcion}</p>
                        <p className="lead">Marca: {item.marca}</p>
                        <p className="lead">Precio: ${item.precio}</p>
                        <p className="lead">Stock: {item.stock}</p>
                    </div>
                </div>
                {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn btn-primary">Ir al Carrito</Link>}
            </div>
        )
}

export default ItemDetail;