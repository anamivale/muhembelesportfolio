import React from "react"
import "./navbar.css"

function Navbar() {
  return (
    <div className="nwrapper">
      <div className="nleft">
        <div className="name">Valeria</div>
        <span className="toogle">Toogle</span>
      </div>
      <div className="nright">
        <div className="nlist">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  )
}

export default Navbar
