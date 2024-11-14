import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/me.jpg";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../foatingDiv/floatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="ileft">
        <div className="iname">
          <span style={darkMode ? { color: "white" } : { color: "black" }}>
            Hey ! I Am
          </span>
          <span>Valeria Muhembele</span>
          <span style={darkMode ? { color: "white" } : { color: "black" }}>
            Backend Developer with intermediate experience in node js and Golang
            producing quality work. I also do frontend development with react
            js, HTMLand css.
          </span>
        </div>
        <button className="button ibutton">
          <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
            Hire Me
          </Link>
        </button>
        <div className="iicons">
          <a href="https://github.com/anamivale">
            <img
              src={Github}
              alt="Github"
              style={darkMode ? { color: "white" } : { color: "black" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/valeria-muhembele-83726222a">
            <img src={Linkedin} alt="Linkedin" />
          </a>{" "}
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="iright">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Math" txt2="Teacher" />
        </motion.div>
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
  );
}

export default Intro;
