import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import background from '../assets/5534694-uhd_3840_2160_24fps.mp4';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Landing() {
    
  return (
    <div className='home'>
        <div className='background-video'>
            <video src={background} autoPlay loop muted />
        </div>
        <div className='Intro'>
            <button>
            <p>
                Welcome to my website!<br></br>I'm Praveen Vijayakumar, a student at the University of Illinois <br></br> at Urbana-Champaign studying Bioengineering and Computer Science.
            </p>
            </button>
        </div>
        <div className='links'>
            <Link to='/projects'>
                <button>
                    Check Out My Work <EastIcon style={{ fontSize: 'large' }}/>
                </button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/about'>
                <button>
                    Learn More About Me <EastIcon style={{ fontSize: 'large' }}/>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Landing