import React, { useState } from "react";
import swal from "sweetalert";
import './NewVideo.css';

const NewVideo = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

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

    const handleVideoBlur = () => {
        if (/^https:\/\/www\.youtube\.com\/watch\?v=/.test(video)) {
            let videoId = video.split('v=')[1];
            const ampersand = videoId.indexOf('&');
            if (ampersand !== -1) {
                videoId = videoId.substring(0, ampersand);
            }
            setImage(`https://img.youtube.com/vi/${videoId}/0.jpg`);
        }
    };

    const handleSave = () => {
        validateForm();
        if(!isFormValid) return;

        const newVideo = {
            title,
            category, 
            image,
            video,
            description
        };

        fetch("http://localhost:5000/videos", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVideo)
        })
        .then(response => response.json())
        .then(data => {
            handleClear();
            swal({
                title: "Video guardado",
                text: "El video ha sido guardado exitosamente.",
                icon: "success",
                button: false,
                timer: 3000
            });
        })
        .catch(error => console.error("Error saving new video:", error));
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

    return (
        <main className="nvmain">
            <h2>Nuevo Video</h2>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <form className="nvform">
                <h3>Crear Tarjeta</h3>
                <div className="nvform-group">
                    <label>Título</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); validateForm(); }} />
                    {errors.title && <p className="error-message">{errors.title}</p>}
                </div>
                <div className="nvform-group">
                    <label>Categoría</label>
                    <select value={category} onChange={(e) => { setCategory(e.target.value); validateForm(); }}>
                        <option value="">Seleccione una categoría</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Innovacion y Gestion">Innovación y Gestión</option>
                    </select>
                    {errors.category && <p className="error-message">{errors.category}</p>}
                </div>
                <div className="nvform-group">
                    <label>Video</label>
                    <input type="text" value={video} onChange={(e) => { setVideo(e.target.value); validateForm(); }} onBlur={handleVideoBlur} />
                    {errors.video && <p className="error-message">{errors.video}</p>}
                </div>
                <div className="nvform-group">
                    <label>Imagen</label>
                    <input type="text" value={image} onChange={(e) => { setImage(e.target.value); validateForm(); }} />
                    <p>Se toma la miniatura del video desde el enlace de YouTube proporcionado. Puede colocar otra ruta de imagen si lo desea.</p>
                    {errors.image && <p className="error-message">{errors.image}</p>}
                </div>
                <div className="nvform-group">
                    <label>Descripción</label>
                    <textarea  value={description}  onChange={(e) => { setDescription(e.target.value); validateForm(); }} cols="30" rows="5" ></textarea>
                    {errors.description && <p className="error-message">{errors.description}</p>}
                </div>
                <div className="nvform-buttons">
                    <button type="button" className="nvsave-button" onClick={handleSave} disabled={!isFormValid}>Guardar</button>
                    <button type="button" className="nvclear-button" onClick={handleClear}>Limpiar</button>
                </div>
            </form>
        </main>
    );
};

export default NewVideo;