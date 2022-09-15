import React from "react";

const Footer = () => {
    return (

        <footer>
        <div className="footer-dark bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="./">Venta de Consolas</a></li>
                            <li><a href="./">Venta de Accesorios de consola</a></li>
                            <li><a href="./">Venta de Videojuegos</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a className="./">Nosotros</a></li>
                            <li><a className="./">Tienda</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>GameStore</h3>
                        <p>Somos una empresa con mas de 10 años de experiencia en la venta de Videojuegos.</p>
                    </div>
                    <div className="col item social">
                        <a href="https://www.whatsapp.com/?lang=es"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://twitter.com/home"><i className="fa-brands fa-twitter-square"></i></a>
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <p className="copyright">GameStore © 2022</p>
            </div>
        </div>
    </footer>
        
    )
}

export default Footer;