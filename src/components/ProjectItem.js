import React from 'react'

function ProjectItem({ name, description }) {
  return (
    <div className='projectItem'>
        <h1> {name} </h1>
        <p> {description} </p>
    </div>
  )
}

export default ProjectItem