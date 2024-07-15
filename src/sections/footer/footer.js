import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../images/icon.webp';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <div className='logo-container'>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="footer-secciones">
                <p>Sobre mi</p>
                <ul>
                    <li>
                        <Link to="/">
                            <span>¿Quien soy?</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/miembros">
                            <span>¿Donde Encontrarme?</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/precio">
                            <span>Distribución</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/noticias">
                            <span>Contacto</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-secciones">
                <p>Productos</p>
                <ul>
                    <li>
                        <Link to="/">
                            <span>Pantalones</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/miembros">
                            <span>Remeras</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/precio">
                            <span>Calzas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/noticias">
                            <span>Buzos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            <span>Tops</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-secciones">
                <p>Secciones</p>
                <ul>
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/miembros">
                            <span>Miembros</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/precio">
                            <span>Precio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/noticias">
                            <span>Noticias</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-creado-por">
                <span>
                    Creado por Gonzalo Calderón: 
                    <a href="https://instagram.com/_gonchalo_" target="_blank" rel="noopener noreferrer"> _gonchalo_ </a>
                    <div className="instagram-icon-container">
                        <a href="https://www.instagram.com/melina.gomezl/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
