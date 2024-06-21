import React from 'react'
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Resume from '../assets/SWE Resume (17).pdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Footer({ totalDistance }) {
  return (
    <div className='footer'>
        <div className="leftSide">
            <div className="name">
                <button>
                <Link to="/" style={{ fontFamily: 'monospace' }}>
                    pravvijayakumar.com
                </Link>
                </button>
            </div>
        </div>
        <div className="center">
            <div className="socials">
                <button>
                    <Link to="https://linkedin.com/in/praveen-vijayakumar-990924269"><LinkedInIcon style={{ fontSize: '100%' }}/></Link>
                    <Link to="https://github.com/PVAnd124"><GitHubIcon style={{ fontSize: '100%' }}/></Link>
                </button>
            </div>     
        </div>
        <div className="rightSide">
            <div className="pixelCount">Your Mouse Has Traveled {totalDistance} px!</div>
        </div>
    </div>
  )
}

export default Footer

/*<a href={Resume} download="Resume.pdf">
                <button>
                    <div id="text">
                        My Resume
                    </div>
                    <div id="image">
                        <CloudDownloadIcon style={{ fontSize: '30px' }}/>
                    </div>
                </button>
            </a>*/