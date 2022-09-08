import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const menoscantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }
    const mascantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarproductos = (valor) => {
        if (itemStock > 0){
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p>Producto X</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {menoscantidad(cantidad - 1)}} />
                        <input type="text" className="form-control text-center" value={cantidad} onChange={() =>{}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {mascantidad(cantidad + 1)}} />
                    </div>
                    <div className="py-3">
                        <input type="button" className="btn btn-secondary" value="Agregar al Carrito" onClick={() => {agregarproductos()}}  />
                        <p>Total Productos: {itemAdd} </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemCount;