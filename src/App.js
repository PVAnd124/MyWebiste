import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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

  const [totalDistance, setTotalDistance] = useState(0);
  const [previousPosition, setPreviousPosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handleMouseMove(event) {
      if (previousPosition.x != null && previousPosition.y != null) {
        const deltaX = event.clientX - previousPosition.x;
        const deltaY = event.clientY - previousPosition.y;
        const distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
        setTotalDistance((totalDistance) => totalDistance + distance);
      }
      setPreviousPosition({ x: event.clientX, y: event.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [previousPosition]);
  

  return (
    <div className="App" onMouseMove={shatter}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer totalDistance={Math.round(totalDistance)} />
      </Router>
    </div>
  );
}

export default App;
