import React from "react"
import "./works.css"
import upwork from "../../img/Upwork.png"
import fi from "../../img/fiverr.png"
import amazone from "../../img/amazon.png"
import shopify from "../../img/Shopify.png"
import { themeContext } from "../../Context"
import { useContext } from "react"
const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "black" }}>
          Hey ! I Am
        </span>
        <span>Works fo All these</span>
        <span>Clients</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          <br />
          nostrum voluptatum enim distinctio, corrupti maxime delectus magni
          <br />
          sapiente incidunt veritatis consequuntur modi in molestiae voluptate.
          <br />
          Cupiditate quos nemo fugiat exercitationem.
        </span>

        <button className="button sbutton"> Hire me</button>

        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="wright">
        <div className="mwcircle">
          <div className="wscircle">
            <img src={upwork} alt="" />
          </div>
          <div className="wscircle">
            <img src={fi} alt="" />
          </div>
          <div className="wscircle">
            <img src={amazone} alt="" />
          </div>
          <div className="wscircle">
            <img src={shopify} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
