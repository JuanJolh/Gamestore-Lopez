import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Xbox Series X", "marca":"Microsoft", "imagen":"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg", "precio":"499", "descripcion":"Presentamos Xbox Series X, la consola Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones de consolas"},
        ];
        const getProduct = () =>
            new Promise((resolve, reject) => {
                const product = productos.find((prod) => prod.id === 1)
                setTimeout(() => {
                    resolve(product);
                }, 2000);
        });

        getProduct()
        .then((info) => {
            setItem(info)
        })



        }, []);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;