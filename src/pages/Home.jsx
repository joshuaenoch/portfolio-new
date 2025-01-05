import React from 'react'
import { useRef, useEffect } from 'react';

export default function Home() {
  // slideshow code
  const slidesRef = useRef([]);
    const dotsRef = useRef([]);
    let index = 0;
    const changeSlide = () => {
      if (index < 0) {
        index = slidesRef.current.length - 1;
      }
      if (index > slidesRef.current.length - 1) {
        index = 0;
      }
      slidesRef.current.forEach(slide => slide.style.display = "none");
      dotsRef.current.forEach(dot => dot.classList.remove("active"));
      if (slidesRef.current.length > 0) {
        slidesRef.current[index].style.display = "block";
        dotsRef.current[index].classList.add("active");
        index++;
        setTimeout(changeSlide, 8000);
      } else {
        setTimeout(changeSlide, 8000);
      }
    };
    useEffect(() => {
      changeSlide();
    }, []);

  return (
    <div>
      <div className="home-header">
        <h1>Joshua Chow</h1>
        <div id="slider">
          <div className="slides" ref={(el) => slidesRef.current[2] = el}>
            <img src="/nature.jpg" width="100%" />          </div>
          <div className="slides" ref={(el) => slidesRef.current[1] = el}>
            <img src="/dog.jpg" width="100%" />
          </div>
          <div className="slides" ref={(el) => slidesRef.current[0] = el}>
            <img src="/drums.gif" width="100%" />
          </div>
          <div id="dot">
            <span className="dot" ref={(el) => dotsRef.current[2] = el}></span>
            <span className="dot" ref={(el) => dotsRef.current[1] = el}></span>
            <span className="dot" ref={(el) => dotsRef.current[0] = el}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
