import React from 'react';
import video from '../assets/video.png';
import '../App.css';

const Banner = () => {
    return (
        <div className="banner" style={{backgroundImage: `url(${video})`}}>
            <div className="banner-content">
                <div className="video-info">
                    <span className="video-category">Categorias</span>
                    <h2 className="video-title">Titulo del video</h2>
                    <p className="video-description">Descripción del video. Aquí se puede añadir una breve sinopsis del contenido del video.</p>
                </div>
                <div className="video-thumbnail">
                    <img src={video} alt="Miniatura" />
                </div>
            </div>
        </div>
    );
};

export default Banner;