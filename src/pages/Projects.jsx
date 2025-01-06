import React from 'react'
import data from '../data.json'

export default function Projects() {
  let projects = data.projects;

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div className="project-card">
          <img className="project-image" src={project.image} />
          <h3 className="project-name">{project.name}</h3>
          <div className="project-buttons">
            <div className="project-link">Read more</div>
            {project.link == "" ? <></> :
            <>
              <div className="vr"></div>
              {project.link[0] == "Link" ?
                            <a className="project-link" href={project.link[1]} target="_blank">
                              Try it out</a>:
                            <a className="project-link" href={project.link[1]} target="_blank">
                              See repository</a>
              }
            </>
             }
          </div>
        </div>
      ))
      }
    </div>
  )
}
