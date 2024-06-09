import React, { useState } from "react";
import './NewVideo.css';

const NewVideo = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        const newVideo = {
            title,
            category, 
            image,
            video,
            description
        };

        console.log("Nuevo video:", newVideo);
    };

    const handleClear = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
    };

    return (
        <main className="nvmain">
            <h2>Nuevo Video</h2>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <form className="nvform">
                <h3>Crear Tarjeta</h3>
                <div className="nvform-group">
                    <label>Título</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="nvform-group">
                    <label>Categoría</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Innovacion y Gestion">Innovación y Gestión</option>
                    </select>
                </div>
                <div className="nvform-group">
                    <label>Imagen</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="nvform-group">
                    <label>Video</label>
                    <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
                </div>
                <div className="nvform-group">
                    <label>Descripción</label>
                    <textarea  value={description}  onChange={(e) => setDescription(e.target.value)} cols="30" rows="5" ></textarea>
                </div>
                <div className="nvform-buttons">
                    <button type="button" className="nvsave-button" onClick={handleSave}>Guardar</button>
                    <button type="button" className="nvclear-button" onClick={handleClear}>Limpiar</button>
                </div>
            </form>
        </main>
    );
};

export default NewVideo;