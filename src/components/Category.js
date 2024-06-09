import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import '../App.css';

const Category = ({ categoryName, color, videos }) => {
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
        console.log('Video actualizado:', updatedVideo);
    }

    return (
        <section className='category'>
            <div className='category-header' style={{ backgroundColor: color }}>
                {categoryName}
            </div>
            <div className='videos'>
                {videos.map((video, index) => (
                    <div className='card' key={index} style={{ borderColor: color }}>
                        <img src={video.thumbnail} alt={video.title} />
                        <div className='card-buttons' style={{ borderTopColor: color }}>
                            <button className='edit-button' onClick={() => handleEdit(video)}>
                                <FontAwesomeIcon icon={faEdit} /> Editar
                            </button>
                            <button className='delete-button'>
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