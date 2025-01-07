import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'

export default function SeeMoreBox({type}) {

  return (
    <div className="box-container"
      style={{
        backgroundImage:`linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.6) 100%),
        ${type == "Project" ? `url(${data.projects[0].image})` : `url(${[...data.journal].reverse()[0].id}.png)`}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit:"cover"
      }}
    >
      <div className="container-text">Latest {type}</div>
      <Link to={type=="Project" ? "projects" : "journal"} className="see-more-button">See all {type}s</Link>
    </div>
  )
}
