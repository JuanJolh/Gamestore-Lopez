import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Xbox Series X", "marca":"Microsoft", "imagen":"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg", "precio":"499"},
            {"id":2, "nombre":"Xbox Series S", "marca":"Microsoft", "imagen":"https://http2.mlstatic.com/D_NQ_NP_2X_771415-MLA44492818319_012021-V.webp", "precio":"299"},
            {"id":3, "nombre":"Play Statios 5", "marca":"Sony", "imagen":"https://ss423.liverpool.com.mx/xl/1099815121.jpg", "precio":"499"},
            {"id":4, "nombre":"Nintendo Switch", "marca":"Nintendo", "imagen":"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00004549688217L.jpg", "precio":"299"},
            {"id":5, "nombre":"Control Xbox", "marca":"Microsoft", "imagen":"https://http2.mlstatic.com/D_NQ_NP_985067-MLA45720839090_042021-O.jpg", "precio":"299"},
            {"id":6, "nombre":"Control PS5", "marca":"Sony", "imagen":"https://cdn.dribbble.com/users/405330/screenshots/11354371/ps5-controller-illustration-dribbble_4x.png", "precio":"299"},
        ];
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