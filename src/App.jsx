import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Newletter from './Components/Newletter';
import Copyright from './Components/Copyright';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Newletter />
      <Copyright />
    </div>
  );
}

export default App;
