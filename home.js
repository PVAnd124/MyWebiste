import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/video-1.mp4';
import '../styles/Home.css';
import EastIcon from '@mui/icons-material/East';

function Home() {
  function shatter(event) {
    const container = document.querySelector('.container');
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
  return(
    <div className="container" onMouseMove={shatter}>
        <div className="home">
          <div className="background-video">
            <video src={Background} autoPlay loop muted/>
          </div>
          <div className="headerContainer">
            <p>
              Congratulations, you've found my website!<br></br>
              I'm Praveen Vijayakumar, a sophomore studying<br></br>
              Bioengineering and Computer Science at the<br></br>
              University of Illinois at Urbana-Champaign!
            </p>
            <Link to="/projects">
              <button className="LearnMore">
                Check Out My Work <EastIcon style={{ fontSize: 'large' }} />
              </button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/about">
              <button className="LearnMore">
                Learn More About Me <EastIcon style={{ fontSize: 'large' }}/>
              </button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Home;