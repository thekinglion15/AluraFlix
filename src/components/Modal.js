import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import '../App.css';

const Modal = ({ show, onClose, videoData, onSave }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if(videoData) {
            setTitle(videoData.title);
            setCategory(videoData.category);
            setImage(videoData.image);
            setVideo(videoData.video);
            setDescription(videoData.description);
        }
    }, [videoData]);

    const validateForm = () => {
        const errors = {};
        if(!title) errors.title = "El título es obligatorio.";
        if(!category) errors.category = "La categoria es obligatoria.";
        if(!image) errors.image = "La imagen es obligatoria.";
        if(!description) errors.description = "La descripcion es obligatoria.";
        if(!video)
            errors.video = "El enlace del video es obligatorio.";
        else if (!/^https:\/\/www\.youtube\.com\/watch\?v=/.test(video))
            errors.video = "El enlace del video debe ser una URL válida de YouTube.";
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSave = () => {
        validateForm();
        if(!isFormValid) return;

        const updatedVideo = {
            ...videoData,
            title,
            category,
            image,
            video,
            description
        };

        fetch(`http://localhost:5000/videos/${videoData.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedVideo)
        })
        .then(response => response.json())
        .then(data => {
            onSave(data);
            swal({
                title: "Video actualizado",
                text: "El video ha sido actualizado exitosamente.",
                icon: "success",
                button: false,
                timer: 3000
            });
            onClose();
        })
        .catch(error => console.error("Error updating video:", error));
    };

    const handleClear = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
        setErrors({});
        setIsFormValid(false);
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
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); validateForm(); }} />
                            {errors.title && <p className="error-message">{errors.title}</p>}
                        </div>
                        <div className="form-group">
                            <label>Categoría</label>
                            <select value={category} onChange={(e) => { setCategory(e.target.value); validateForm(); }}>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Innovacion y Gestion">Innovación y Gestión</option>
                            </select>
                            {errors.category && <p className="error-message">{errors.category}</p>}
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text" value={image} onChange={(e) => { setImage(e.target.value); validateForm(); }} />
                            {errors.image && <p className="error-message">{errors.image}</p>}
                        </div>
                        <div className="form-group">
                            <label>Video</label>
                            <input type="text" value={video} onChange={(e) => { setVideo(e.target.value); validateForm(); }} />
                            {errors.video && <p className="error-message">{errors.video}</p>}
                        </div>
                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea value={description} onChange={(e) => {setDescription(e.target.value); validateForm(); }} cols="30" rows="5"></textarea>
                            {errors.description && <p className="error-message">{errors.description}</p>}
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="save-button" onClick={handleSave} disabled={!isFormValid}>Guardar</button>
                    <button className="clear-button" onClick={handleClear}>Limpiar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;