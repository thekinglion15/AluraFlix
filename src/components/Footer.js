import React, { useEffect } from "react";
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.png';
import '../App.css';

const Footer = () => {
    useEffect(() => {
        const yearElement = document.getElementById('year');
        if(yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }, []);

    return (
        <footer className="footer">
            <div className="footer-logos">
                <img src={logo1} alt="Logo AluraFlix" />
                <img src={logo2} alt="Logo The King Lion" />
            </div>
            <p>Desarrollado por Gabriel De León ~ The King Lion</p>
            <p>&copy; Todos los derechos reservados.</p>
            <p>Alura Latam <span id="year"></span></p>
        </footer>
    );
};

export default Footer;