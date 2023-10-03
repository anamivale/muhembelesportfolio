import React from "react"
import "./serrvices.css"
import HeartEmoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from "../card/card"
import resume from "./CV.pdf"
import { themeContext } from "../../Context"
import { useContext } from "react"
function Services() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "black" }}>
          My Awesome
        </span>
        <span>Services</span>
        <span>
          I develope web Applications. I deliver your work within the time limit
          agreed . And also I am flexible.
        </span>
        <a href={resume} download>
          <button className="button sbutton">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card emoji={HeartEmoji} heading={"Design"} detail={"figma, Adobe"} />
        </div>
        <div className="card2">
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
        <div className="card3">
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
