import React from 'react'

export default function SeeMoreBox({type}) {
  return (
    <div className="box-container"
      style={{
        backgroundImage:"url('/dog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit:"cover"
      }}
    >
      <div className="container-text">Latest {type}</div>
      <button className="see-more-button">See all {type}s</button>
    </div>
  )
}
