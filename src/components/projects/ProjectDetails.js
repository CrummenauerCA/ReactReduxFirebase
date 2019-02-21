import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-context">
          <span className="card-title">Project title {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam a commodo mi. Etiam est lacus, ultricies et fermentum ac, pulvinar dignissim sapien. Ut volutpat,
            sem eget condimentum bibendum, massa eros dignissim ipsum, sed pulvinar eros tellus at felis.
            Sed vel aliquam lacus, ullamcorper blandit purus.
            Morbi aliquam, diam vulputate sodales venenatis, dui libero rhoncus tortor, sit amet varius dui enim a est.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Cezar</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
