import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-header">
        <h2>Apex</h2>
    </div>
    <div className="about-icon">
    <div className="icons">
        <h5>Apps</h5>
        <p>All Apps</p>
        <p>Updates</p>
    </div>
    <div className="icons">
        <h5>Categories</h5>
        <p>Photography</p>
        <p>Graphic Design</p>
        <p>Video</p>
        <p>UI/UX</p>
    </div>
    <div className="icons">
        <h5>Fonts</h5>
        <p>Manage Fonts</p>
    </div>
    <div className="icons">
        <h5>Resource Links</h5>
        <p>Stock</p>
        <p>Portfolio</p>
    </div>
    </div>
    </>
  )
}

export default About
