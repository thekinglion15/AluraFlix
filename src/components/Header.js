import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

import inicio from '../assets/inicio.png';
import nuevo from '../assets/nuevo.png';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="AluraFlix Logo" />
            </div>
            <nav>
                <Link to="/" className="button button-inicio">
                    <span className="text">INICIO</span>
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    <img src={inicio} className="icon" alt="Inicio" />
                </Link>
                <Link to="/nuevoVideo" className="button button-nuevoVideo">
                    <span className="text">NUEVO VIDEO</span>
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                    <img src={nuevo} className="icon" alt="Nuevo Video" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;