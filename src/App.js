import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Navbar from './components/navbar';
import Projects from './pages/Projects';
import Footer from './components/Footer';


function App() {

  function shatter(event) {
    const container = document.querySelector('.App');
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    const shatterPiece = document.createElement('div');
    shatterPiece.classList.add('shatter-piece');
    shatterPiece.style.left = mouseX + 'px';
    shatterPiece.style.top = mouseY + 'px';
    container.appendChild(shatterPiece);

    setTimeout(() => { shatterPiece.style.opacity = 1; }, 0.1);
    setTimeout(() => { shatterPiece.remove(); }, 100);
  }

  return (
    <div className="App" onMouseMove={shatter}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
