import React from "react"
import "./intro.css"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/me.jpg"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from "../foatingDiv/floatingDiv"

function Intro() {
  return (
    <div className="intro">
      <div className="ileft">
        <div className="iname">
          <span>Hey ! I Am</span>
          <span>Valeria Muhembele</span>
          <span>
            Backend Developer with intermediate experience in node js producing
            quality work. I also do frontend development with react js.
          </span>
        </div>
        <button className="button ibutton">Hire Me</button>
        <div className="iicons">
          {/* <a href="https://www.linkedin.com/in/valeria-muhembele-83726222a">
            <img src={Linkedin} alt="Linkedin" />
          </a> */}
          <img src={Github} alt="Github" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="iright">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            top: "17rem",
            background: "#c1f5ff",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
