import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Category = ({ categoryName, color, videos }) => {
    return (
        <section className='category'>
            <div className='category-header' style={{ backgroundColor: color }}>
                {categoryName}
            </div>
            <div className='videos'>
                {videos.map((video, index) => (
                    <div className='card' key={index} style={{ borderColor: color }}>
                        <img src={video.thumbnail} alt={video.title} className='video-thumbnail' />
                        <div className='card-buttons' style={{ borderTopColor: color }}>
                            <button className='edit-button'>
                                <FontAwesomeIcon icon={faEdit} /> Editar
                            </button>
                            <button className='delete-button'>
                                <FontAwesomeIcon icon={faTrash} /> Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Category;