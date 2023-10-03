import React from "react"
import "./navbar.css"
import Toggle from "../toggle/toggle"
import { Link } from "react-scroll"

function Navbar() {
  return (
    <div className="nwrapper" id="Navbar">
      <div className="nleft">
        <div className="name">Valeria</div>
        <Toggle />
      </div>
      <div className="nright">
        <div className="nlist">
          <ul style={{ listStyleType: "none", cursor: "pointer" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Works" smooth={true} activeClass="activeClass">
              <li>Works</li>
            </Link>
            <Link
              spy={true}
              to="testimonial"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">
          <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
            Contact
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
