import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList"
import { productos } from "./productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
            console.log(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;