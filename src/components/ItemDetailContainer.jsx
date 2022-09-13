import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
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