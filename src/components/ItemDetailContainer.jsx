import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./Lista-Productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        let producto = id;
        const getProduct = () =>
            new Promise((resolve, reject) => {
                const product = productos.find(prod => prod.id === parseInt(id));
                console.log(product);
                    resolve(product);
                
        });

        getProduct()
        .then((info) => {
            setItem(info)
        })



        }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;