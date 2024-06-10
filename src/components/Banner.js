import React, { useEffect, useState } from 'react';
import '../App.css';

const Banner = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data);
                if(data.length > 0) {
                    setCurrentVideo(data[Math.floor(Math.random() * data.length)]);
                }
            })
            .catch(error => console.error("Error fetching videos:", error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if(videos.length > 0)
                setCurrentVideo(videos[Math.floor(Math.random() * videos.length)]);
        }, 10000);

        return () => clearInterval(interval);
    }, [videos]);

    if(!currentVideo)
        return null;

    const {
        category,
        title,
        description,
        image,
        video
    } = currentVideo;

    const categoryColors = {
        "Frontend": "#007bff",
        "Backend": "#28a745",
        "Innovacion y Gestion": "#ffba05"
    };

    const categoryColor = categoryColors[category] || "#ffffff";

    return (
        <div className="banner" style={{backgroundImage: `url(${image})`}}>
            <div className="banner-content">
                <div className="video-info">
                    <span className="video-category" style={{ backgroundColor: categoryColor }}>{category}</span>
                    <h2 className="video-title">{title}</h2>
                    <p className="video-description">{description}</p>
                </div>
                <div className="video-thumbnail">
                    <a href={video} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={title} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;