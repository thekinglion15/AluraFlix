//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import NewVideo from './pages/NewVideo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/nuevoVideo' element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
