import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Icon from '../images/icon.webp';


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuProductsOpen, setSubmenuProductsOpen] = useState(false);
  const [submenuPlansOpen, setSubmenuPlansOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProductsMouseEnter = () => {
    setSubmenuProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    setSubmenuProductsOpen(false);
  };

  const handlePlansMouseEnter = () => {
    setSubmenuPlansOpen(true);
  };

  const handlePlansMouseLeave = () => {
    setSubmenuPlansOpen(false);
  };

  return (
    <nav className="Nav-major">
      <div className="Nav-major2">
        <div className="hamburger-icon" onClick={handleMenuToggle}>
          <i className="bi bi-list"></i>
        </div>
        <div className="icon">
          <Link to='/'>
            <img src={Icon} alt='icon'/>
          </Link>
        </div>
        <ul className={`navigation-items ${menuOpen ? 'open' : ''}`}>
          <li onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
            <Link to="/products">
              Productos
              <span className="nav-icon">
                <i className="bi bi-chevron-down desktop-icon"></i>
                <i className="bi bi-chevron-right mobile-icon"></i>
              </span>
            </Link>
            {submenuProductsOpen && (
              <div className="submenu" onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
                <ul>
                  <li><Link to="/subpage1">Subpage 1</Link></li>
                  <li><Link to="/subpage2">Subpage 2</Link></li>
                  <li><Link to="/subpage3">Subpage 3</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li><Link to="/contact">Contacto</Link></li>
          <li onMouseEnter={handlePlansMouseEnter} onMouseLeave={handlePlansMouseLeave}>
            <Link to="/plans">
              Planificaciones
              <span className="nav-icon">
                <i className="bi bi-chevron-down desktop-icon"></i>
                <i className="bi bi-chevron-right mobile-icon"></i>
              </span>
            </Link>
            {submenuPlansOpen && (
              <div className="submenu" onMouseEnter={handlePlansMouseEnter} onMouseLeave={handlePlansMouseLeave}>
                <ul>
                  <li><Link to="/plan1">Plan 1</Link></li>
                  <li><Link to="/plan2">Plan 2</Link></li>
                  <li><Link to="/plan3">Plan 3</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li><Link to="/client">CONOCE A MELINA</Link></li>
        </ul>
        <div className="extra-items">
          <Link to="/noHayLink(Creo)" className="hidden-tablet-mobile"><i className="bi bi-search"></i></Link>
          <Link to="/loginRegister" className="hidden-tablet-mobile"><i className="bi bi-person"></i></Link>
          <Link to="/NoHayLink(Creo)"><i className="bi bi-bag"></i></Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
