import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/Context";

const Cart = () => {
    const {cartTotal, clear} = useContext(CartContext);

    return (
            <div>
            <Link to={"/cart"}>
                <button type="button" className="btn position-relative" title="Ir al Carrito">
                <i className="fa-solid fa-cart-shopping"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>
        </div>
        
    )
}

export default Cart;