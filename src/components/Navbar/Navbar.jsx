import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  const navigate = useNavigate();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo />
      </div>
      <div className="navbar-menu">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>
      <div className="navbar-cart" onClick={() => navigate('/cart')}>
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </nav>
  );
};

export default Navbar; 