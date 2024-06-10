import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import swal from 'sweetalert';
import '../App.css';

const Category = ({ categoryName, color, videos, onUpdate, onDelete }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleEdit = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVideo(null);
    }

    const handleSave = (updatedVideo) => {
        onUpdate(updatedVideo);
    }

    const handleDelete = (videoId) => {
        swal({
            title: "¿Estás seguro de eliminar el video?",
            text: "Una vez eliminado, no podrás recuperar este video.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDetele) => {
            if(willDetele) {
                fetch(`http://localhost:5000/videos/${videoId}`, {
                    method: 'DELETE',
                })
                .then(() => {
                    onDelete(videoId);
                    swal({
                        title: "Video eliminado",
                        text: "El video ha sido eliminado exitosamente.",
                        icon: "success",
                        button: false,
                        timer: 3000
                    });
                })
                .catch((error) => console.error("Error deleting video:", error));
            }
        });
    };

    return (
        <section className='category'>
            <div className='category-header' style={{ backgroundColor: color }}>
                {categoryName}
            </div>
            <div className='videos'>
                {videos.map((video, index) => (
                    <div className='card' key={index} style={{ borderColor: color }}>
                        <a href={video.video} target='_blank' rel='noopener noreferrer'>
                            <img src={video.image} alt={video.title} />
                        </a>
                        <div className='card-buttons' style={{ borderTopColor: color }}>
                            <button className='edit-button' onClick={() => handleEdit(video)}>
                                <FontAwesomeIcon icon={faEdit} /> Editar
                            </button>
                            <button className='delete-button' onClick={() => handleDelete(video.id)}>
                                <FontAwesomeIcon icon={faTrash} /> Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onClose={handleCloseModal} videoData={selectedVideo} onSave={handleSave} />
        </section>
    );
};

export default Category;