import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Home from './components/Home/Home.js'
import About from './components/About/About.js';
import Service from './components/Service/Service.js'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Restu Investama</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Restu Investama" />
      </Helmet>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
