import React, { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const menoscantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }
    }

    const mascantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            onAdd(counter);
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter);
        }   
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="row">
            <div className="col-md-6">
                <p><input type="button" className="btn btn-primary" value="-" onClick={() => {menoscantidad(counter - 1)}} />   {counter}  <input type="button" className="btn btn-primary" value="+" onClick={() => {mascantidad(counter + 1)}} /></p>
                <p><input type="button" className="btn btn-primary" value="Agregar" onClick={() => {agregarProductos()}} /></p>
            </div>        
        </div>
    )
};

export default ItemCount;