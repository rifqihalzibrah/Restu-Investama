import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import NavigationID from './components/NavigationID.js';
import Home from './components/Home/Home.js'
import HomeID from './components/Home/HomeID.js'
import About from './components/About/About.js';
import AboutID from './components/About/AboutID.js';
import Service from './components/Service/Service.js'
import ServiceID from './components/Service/ServiceID.js'
import Contact from './components/Contact/Contact.js';
import ContactID from './components/Contact/ContactID.js';
import News from './components/News/News.js';
import Footer from './components/Footer.js';
import FooterID from './components/FooterID.js';
import ScrollToTop from './components/ScrollToTop';
import Ads from './components/Ads.js';

function App() {
  // const [language, setLanguage] = useState(true)
  // const [url, setUrl] = useState(window.location.href)

  const [url, getUrl] = useState(window.location.href);
  const setUrl = () => {
    getUrl(window.location.href)
  }

  useEffect(() => {
    window.addEventListener('url', setUrl);

    return (() => {
      window.removeEventListener('url', setUrl);
    })
  }, [url])

  return (
    <div className="App">
      <BrowserRouter>
        {url === 'http://localhost:3000/' ? <Navigation /> : <NavigationID />}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />

          <Route path='/id/beranda' element={<HomeID />} />
          <Route path='/id/servis' element={<ServiceID />} />
          <Route path='/id/tentang' element={<AboutID />} />
          <Route path='/id/kontak' element={<ContactID />} />
        </Routes>
        <Ads />
        {url === 'http://localhost:3000/' ? <Footer /> : <FooterID />}
      </BrowserRouter>
    </div>
  );
}

export default App;
