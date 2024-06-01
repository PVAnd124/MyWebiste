import React, { useEffect } from 'react'
import { ProjectList } from '../pages/ProjectList';
import ProjectItem from '../components/ProjectItem';
import '../styles/Project.css';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import * as THREE from 'three';
import background from '../assets/pexels-yuraforrat-20376991.jpg';
import { create } from '@mui/material/styles/createTransitions';

function Projects() {

  return (
    <div className='overall'>
      <div className='background-img'>
        <img src={background} alt="Background" />
      </div>
      <div className='section1'>
        My Projects
      </div>
      <div className='section2'>
        {ProjectList.map((projectItem, key) => (
          <Link to={projectItem.link} key={key}>
            <button><ProjectItem name={projectItem.name} description={projectItem.description} /></button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects