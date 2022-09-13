import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
        return (
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={item.imagen} class="d-block mx-lg-auto img-fluid" alt={item.nombre} width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{item.nombre}</h1>
                        <p className="lead">{item.descripcion}</p>
                        <p className="lead">Marca: {item.marca}</p>
                        <p className="lead">Precio: {item.precio}</p>
                    </div>
                </div>
            </div>
        )
}

export default ItemDetail;