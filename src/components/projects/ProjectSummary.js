import React from 'react';

const ProjectSummary = ({project}) => {
  return (
      <div className='card z-depth-0 project-sumary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>Posted by Cezar</p>
          <p className='gray-text'>3rd September, 5am</p>
        </div>
      </div>
  );
}

export default ProjectSummary;