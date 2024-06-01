import React, { useState } from 'react';
import Logo from '../assets/IllinoisLogoForWebsite.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import CottageIcon from '@mui/icons-material/Cottage';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import Dummy from '../assets/University_of_Illinois_at_Urbana–Champaign_logo.svg.png'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <div className="name">
                    <Link to="/" style={{ fontFamily: 'monospace' }}>
                        pravvijayakumar.com
                    </Link>
                </div>
                <div className="hiddenLinks">
                    <Link to="/"> <CottageIcon style={{fontSize: 'large'}} /> Home </Link>
                    <Link to="/projects"> <BuildIcon style={{ fontSize: 'large' }} /> Projects </Link>
                    <Link to="/about"> <InfoIcon style={{ fontSize: 'large' }}/> About </Link>
                </div>
            </div>
            <div className="center">
                <Link to="/"> <CottageIcon style={{fontSize: 'large'}} /> <br></br>Home </Link>
                <Link to="/projects"> <BuildIcon style={{ fontSize: 'large' }} /> <br></br>Projects </Link>
                <Link to="/about"> <InfoIcon style={{ fontSize: 'large' }}/> <br></br>About </Link>
                <button onClick={toggleNavbar} id="hamburger">
                    <ReorderIcon />
                </button>
                
            </div>
            <div className="rightSide">
                <img src={Dummy}></img>
            </div>
        </div>
    )
}

export default Navbar