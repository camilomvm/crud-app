import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import { capitalizeFirstLetter } from '../../helpers/CapitalizeName';
import AuthTokenManager from '../../helpers/AuthTokenManager';
import './style.css';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {state} = useAppContext();
    const navigate = useNavigate()
 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="user-menu">
            <div className="user-info" onClick={toggleMenu}>
                <span className="user-name">Hola, {capitalizeFirstLetter(state.homeUser.nombre)}!</span>
            </div>
            {isOpen && (
                <ul className="user-dropdown">
                    <li onClick={() =>{
                        navigate('/login')
                        AuthTokenManager.removeToken()
                    }}>Cerrar sesión</li>
                </ul>
            )}
        </div>
    );
};

export default UserMenu;
