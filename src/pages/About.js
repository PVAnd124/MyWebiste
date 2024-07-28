import React from 'react';
import '../styles/About.css';
import Profile from '../assets/E57A4278-4556-4F3F-AE25-84B1DA9BAA10.JPG';
import { Link } from 'react-router-dom';
import background from '../assets/pexels-bylukemiller-24589146.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Java from '../assets/Java.webp'
import C from '../assets/plus_logo_c_icon_214621.png'
import Python from '../assets/logo-python-icon-506x512-t38ct41x.png'
import HTML from '../assets/121537.png'
import CSS from '../assets/css3-logo-79B129E90E-seeklogo.com.png'
import TF from '../assets/tensorflow-icon-457x512-vp4qnnib.png'
import R from '../assets/download (2).png'
import RT from '../assets/react-1-logo-black-and-white.png'
import JS from '../assets/javascript_logo_icon_145155.png'
import PD from '../assets/download (3).png'
import SK from '../assets/download (4).png'
import NP from '../assets/download (5).png'
import SB from '../assets/download (6).png'
import ML from '../assets/download (2).jpeg'
import MB from '../assets/download (3).jpeg'

function About() {
  return (
    <div className="about">
        <div className="background-img">
            <img src={background} />
        </div>
        <div className="header">
            <h1>Meet The Creator</h1>
        </div>
        <div className="leftRightContainer">
            <div className="left">
                <button>
                    <img src={Profile}></img>
                </button>
            </div>
            <div className="right">
                <button>
                    <p>
                        Hi! I'm a student at the University of Illinois at Urbana-Champaign, studying Bioengineering and Computer Science. I'm a dedicated student and researcher driven by the passion to harness
                        the full potential of technology in biological and medical innovation. I have experience in
                        leveraging computational tools such as machine learning
                        and software development to help improve current medical roadblocks. I am currently looking for internship opportunities
                        in Data Science and Machine Learning. Feel free to reach out! Contact info below! 
                    </p>
                </button>
            </div>
        </div>
        <div className="skillsHeader">
            <div id="header">
                SKILLS
            </div>
            <div className="skills">
                <div id="s1"><button><img src={Java}></img><br></br>Java</button></div>
                <div id="s2"><button><img src={C}></img><br></br>C++</button></div>
                <div id="s3"><button><img src={Python}></img><br></br>Python</button></div>
                <div id="s4"><button><img src={HTML}></img><br></br>HTML</button></div>
                <div id="s5"><button><img src={CSS}></img><br></br>CSS</button></div>
                <div id="s6"><button><img src={TF}></img><br></br>Tensorflow</button></div>
                <div id="s7"><button><img src={R}></img><br></br>R</button></div>
                <div id="s8"><button><img src={RT}></img><br></br>React</button></div>
                <div id="s9"><button><img src={JS}></img><br></br>Javascript</button></div>
                <div id="s10"><button><img src={PD}></img><br></br>pandas</button></div>
                <div id="s11"><button><img src={SK}></img><br></br>sklearn</button></div>
                <div id="s12"><button><img src={NP}></img><br></br>numPy</button></div>
                <div id="s13"><button><img src={SB}></img><br></br>seaborn</button></div>
                <div id="s14"><button><img src={ML}></img><br></br>Matplotlib</button></div>
                <div id="s15"><button><img src={MB}></img><br></br>MATLAB</button></div>
            </div>
        </div>
        <div className="extra">
            <p>
                Check out my socials:<br></br><br></br>
                <div className="socials">
                    <Link to="https://linkedin.com/in/praveen-vijayakumar-990924269"><LinkedInIcon style={{ fontSize: '100%' }}/></Link>
                    <Link to="https://github.com/PVAnd124"><GitHubIcon style={{ fontSize: '100%' }}/></Link>
                </div>
            </p>
            <p id="reach">
                I'm currently seeking internship opportunities in Data Science and Software Engineering. Reach out at: pv16@illinois.edu.
            </p>
        </div>
    </div>
  )
}

export default About