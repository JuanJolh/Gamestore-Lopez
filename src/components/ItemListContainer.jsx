import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { productos } from "./Lista-Productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {cat} = useParams();

    useEffect(() => {
        let categoria = "";

        if (cat === "consolas") {
            categoria = "consola";
        } else if (cat === "accesorios") {
            categoria = "accesorios";
        } else if (cat === "videojuegos") {
            categoria = "videojuego";
        } else {
            categoria = "all";
        }

        const promesa = new Promise((resolve, reject) => {
            resolve(productos);
        });

        promesa.then((respuesta) => {
            if (categoria === "all"){
                setItems(respuesta);
            } else {
                const nuevosproductos = productos.filter(producto => producto.categoria === categoria);
                setItems(nuevosproductos);
            }
        });
    }, [cat]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;