import React from "react"
import "./contact.css"
const Contact = () => {
  return (
    <div className="contact">
      <div className="contactleft">
        <span>Get In Touch</span> <br />
        <span>Contact Me</span>
      </div>
      <div className="cright">
        <div className="form">
          <form className="mform">
            <input className="cinput" type="text" placeholder="Name" />
            <input className="cinput" type="email" placeholder="Email" id="" />
            <textarea
              className="cinput"
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="2"
            ></textarea>{" "}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
