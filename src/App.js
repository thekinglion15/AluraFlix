//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Category from './components/Category';
import Footer from './components/Footer';
import NewVideo from './pages/NewVideo';

const videos = [
  { thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', title: 'Video 1' },
  { thumbnail: 'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-thumb.jpg', title: 'Video 2' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_640.jpg', title: 'Video 3' },
  { thumbnail: 'https://img.freepik.com/premium-photo/photo-majestic-mountain-range-sunrise-with-small-lake-lone-tree-foreground_978463-562.jpg?w=360', title: 'Video 4' },
  { thumbnail: 'https://img.freepik.com/premium-photo/northern-light-mountains-ocean-beautiful-landscape-norway-island_615910-3942.jpg', title: 'Video 5' },
  { thumbnail: 'https://img.freepik.com/premium-photo/northern-light-mountains-ocean-beautiful-landscape-norway-island_615910-3942.jpg', title: 'Video 5' },
  { thumbnail: 'https://img.freepik.com/premium-photo/northern-light-mountains-ocean-beautiful-landscape-norway-island_615910-3942.jpg', title: 'Video 5' },
];


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={
            <main className='main-content'>
              <Banner />
              <Category categoryName="Frontend" color="#007bff" videos={videos} />
              <Category categoryName="Backend" color="#28a745" videos={videos} />
              <Category categoryName="Innovación y Gestión" color="#ffba05" videos={videos} />
            </main>
          } />
          <Route path='/nuevoVideo' element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
