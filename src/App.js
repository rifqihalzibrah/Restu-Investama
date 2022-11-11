import './App.css';
import './style.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Home from './components/Home/Home.js'
import About from './components/About/About.js';
import Service from './components/Service/Service.js'
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const helmetContext = {}

  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Restu Investama</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Restu Investama" />
        </Helmet>
      </HelmetProvider>
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
