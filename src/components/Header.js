import React from "react";
import logo1 from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo1} alt="AluraFlix Logo" />
                </Link>
            </div>
            <nav>
                <Link to="/" className="button button-inicio">
                    <span className="text">INICIO</span>
                    <FontAwesomeIcon icon={faHome} className="icon" />
                </Link>
                <Link to="/nuevoVideo" className="button button-nuevoVideo">
                    <span className="text">NUEVO VIDEO</span>
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;