import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li>Login</li></Link>
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/Cart"><li>Cart</li></Link>
        <Link to="/Logout"><li>Logout</li></Link>
      </ul>
    </nav>
  );
}

