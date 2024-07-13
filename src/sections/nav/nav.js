import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav-major">
      <div className="Nav-major2">
        <div className="hamburger-icon" onClick={handleMenuToggle}>
          <i className="bi bi-list"></i>
        </div>
        <div className="icon">
          <img src="ruta_del_icono" alt="icono" />
        </div>
        <ul className={`navigation-items ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/plans">Planificaciones</Link></li>
          <li><Link to="/client">CONOCE A MELINA</Link></li>
        </ul>
        <div className="extra-items">
          <Link to="/noHayLink(Creo)" className="hidden-tablet-mobile"><i className="bi bi-search"></i></Link>
          <Link to="/login" className="hidden-tablet-mobile"><i className="bi bi-person"></i></Link>
          <Link to="/NoHayLink(Creo)"><i className="bi bi-bag"></i></Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
