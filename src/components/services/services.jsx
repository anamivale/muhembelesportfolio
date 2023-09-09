import React from "react"
import "./serrvices.css"
import HeartEmoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from "../card/card"
import resume from "./CV.pdf"
function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          nostrum voluptatum enim distinctio, corrupti maxime delectus magni
          sapiente incidunt veritatis consequuntur modi in molestiae voluptate.
          Cupiditate quos nemo fugiat exercitationem.
        </span>
        <a href={resume} download>
          <button className="button sbutton">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card emoji={HeartEmoji} heading={"Design"} detail={"figma, Adobe"} />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"html, css, react, javascript, nodejs"}
          />
        </div>
        <div
          className="blur sblur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur sblur3"
          style={{ background: "var(--purple)" }}
        ></div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"Teacher"}
            detail={
              "Offer tution to high school students in Mathematics, Chemistry and physics "
            }
          />
        </div>
        <div
          className="blur sblur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Services
