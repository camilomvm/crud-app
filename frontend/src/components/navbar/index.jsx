// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Importamos los estilos
import UserMenu from '../user-menu';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Crud App</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/home/register-employee">Registros de empleados</Link></li>
                <li><Link to="/home/register-request">Registros de solicitudes</Link></li>
            </ul>
            <UserMenu/>
        </nav>
    );
};

export default Navbar;
