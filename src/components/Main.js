import React, { useEffect, useState } from "react";
import Banner from './Banner';
import Category from './Category';
import '../App.css';

const Main = () => {
    const [videos, setVideos] = useState([]);
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const [innovaGestion, setInnovaGestion] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data);
                setFrontend(data.filter(video => video.category === "Frontend"));
                setBackend(data.filter(video => video.category === "Backend"));
                setInnovaGestion(data.filter(video => video.category === "Innovacion y Gestion"));
            })
            .catch(error => console.error("Error fetching videos:", error));
    }, []);

    const handleUpdateVideo = (updatedVideo) => {
        setVideos(prevVideos => {
            const updatedVideos = prevVideos.map(video => video.id === updatedVideo.id ? updatedVideo : video);
            setFrontend(updatedVideos.filter(video => video.category === "Frontend"));
            setBackend(updatedVideos.filter(video => video.category === "Backend"));
            setInnovaGestion(updatedVideos.filter(video => video.category === "Innovacion y Gestion"));
            return updatedVideos;
        });
    };

    return (
        <main className='main-content'>
            <Banner />
            <Category categoryName="Frontend" color="#007bff" videos={frontend} onUpdate={handleUpdateVideo} />
            <Category categoryName="Backend" color="#28a745" videos={backend} onUpdate={handleUpdateVideo} />
            <Category categoryName="Innovación y Gestión" color="#ffba05" videos={innovaGestion} onUpdate={handleUpdateVideo} />
        </main>
    );
};

export default Main;