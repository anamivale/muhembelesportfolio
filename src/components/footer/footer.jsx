import React from "react"
import "./footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>muhembelev@gmail.com</span>
        <div className="ficons">
          <Insta size="3rem" />
          <a href="https://facebook.com/valeria-muhembele">
            <Facebook
              size="3rem"
              style={{ color: "white", background: "black" }}
            />
          </a>
          <a href="https://github.com/anamivale">
            <Github size="3rem" style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
