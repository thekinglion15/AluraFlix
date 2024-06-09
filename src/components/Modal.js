import React, { useState, useEffect } from "react";
import '../App.css';

const Modal = ({ show, onClose, videoData, onSave }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(videoData) {
            setTitle(videoData.title);
            setCategory(videoData.category);
            setImage(videoData.image);
            setVideo(videoData.video);
            setDescription(videoData.description);
        }
    }, [videoData]);

    const handleSave = () => {
        onSave({
            title,
            category,
            image,
            video,
            description
        });
        onClose();
    };

    const handleClear = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
    };

    if(!show) {
        return null
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Editar Card</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Categoría</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Innovacion y Gestion">Innovación y Gestión</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Video</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="5"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="save-button" onClick={handleSave}>Guardar</button>
                    <button className="clear-button" onClick={handleClear}>Limpiar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;