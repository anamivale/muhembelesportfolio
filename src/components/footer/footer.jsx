import React from "react"
import wave from "../../img/wave.png"
import "./footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" />
      <div className="f-content">
        <span>muhembelev@gmail.com</span>
        <div className="ficons">
          <Insta size="3rem" />
          <Facebook size="3rem" />
          <Github size="3rem" />
        </div>
      </div>
    </div>
  )
}

export default Footer
