import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Events from './components/Events.jsx';
import PresentTeam from './components/PresentTeam.jsx';
import Home from './components/Landing.jsx';
import Contact from './components/Contact.jsx';
import Video from './components/video.jsx';
import Login from './components/login.jsx';
import Mediagallery from './components/Mediagallery.jsx';
import Profileupdate from './components/profileupdate.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const dark = theme === 'dark';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`max-w-[1600px] items-center justify-between mx-auto ${dark ? 'light' : 'dark'}`}>
      <BrowserRouter>
        <Header dark={dark} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Mediagallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<PresentTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path ="/member" element={<Profileupdate />} />
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
        <Footer dark={dark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
