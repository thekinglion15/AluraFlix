import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
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
                    <img src={inicio} className="icon" alt="Inicio" />
                </Link>
                <Link to="/nuevoVideo" className="button button-nuevoVideo">
                    <span className="text">NUEVO VIDEO</span>
                    <img src={nuevo} className="icon" alt="Nuevo Video" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;