import React, { useState, useEffect } from 'react';
import data from '../data.json';

export default function Projects() {

  const [modalImage, setModalImage] = useState(null);
  const [projects, setProjects] = useState(data.projects);

  useEffect(() => {
      window.scrollTo(0, 0);
      setProjects(data.projects);
  }, []);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="project-list">
        {projects.map((project, index) => {
          const [isOpened, setIsOpened] = useState(false);

          // Toggle the visibility of the description
          const readMore = () => {
            setIsOpened(!isOpened);
          };

          return (
            <div key={index} className="project-card">
              <img className="project-image" src={project.image} alt={project.name} onClick={() => openModal(project.image)}/>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-buttons">
                <div className="project-link" onClick={readMore}>
                  {isOpened ? "Close" : "Read more"}
                </div>
                {project.link === "" ? null : (
                  <>
                    <div className="vr"></div>
                    {project.link[0] === "Link" ? (
                      <a className="project-link" href={project.link[1]} target="_blank" rel="noopener noreferrer">
                        Try it out
                      </a>
                    ) : (
                      <a className="project-link" href={project.link[1]} target="_blank" rel="noopener noreferrer">
                        See repository
                      </a>
                    )}
                  </>
                )}
              </div>
              {isOpened && (
                <div className="project-description">
                  <div>{project.description}</div>
                  <div>Made with: {project.technologies.join(", ")}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Selected Project" />
          </div>
        </div>
      )}
    </>
  );
}
