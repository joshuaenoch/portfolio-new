import React from 'react'
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="projects">Projects</Link>
      <Link className="navbar-item" to="journal">Journal</Link>
    </div>
  )
}
