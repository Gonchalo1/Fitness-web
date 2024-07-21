import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../images/icon.webp';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <div className='logo-container'>
                    <Link to='/home'>
                    <img src={Logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="footer-secciones">
                <p>Sobre mi</p>
                <ul>
                    <li>
                        <Link to="/client">
                            <span>¿Quien soy?</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <span>Entregas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
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
                <p>Planificaciones</p>
                <ul>
                    <li>
                        <Link to="/">
                            <span>Presenciales</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span>A distancia</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/">
                            <span>Grupo Funcional</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className="footer-creado-por">
                <span>
                    Creado por Gonzalo Calderón: 
                    <div className="instagram-icon-container">
                        <a href="https://www.instagram.com/_gonchalo_/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
