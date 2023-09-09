import React, { useRef } from "react"
import "./contact.css"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_4of3ezl",
        "template_czboyab",
        form.current,
        "NNTr85XMcI-rzRlQ6"
      )
      .then(
        (result) => {
          alert("Thank you for contacting me")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact">
      <div className="contactleft">
        <span>Get In Touch</span> <br />
        <span>Contact Me</span>
      </div>
      <div className="cright">
        <div className="form">
          <form className="mform" ref={form} onSubmit={sendEmail}>
            <input
              className="cinput"
              type="text"
              placeholder="Name"
              name="from_name"
            />
            <input
              className="cinput"
              type="email"
              placeholder="Email"
              id=""
              name="user_email"
            />
            <textarea
              className="ctextarea"
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="2"
            ></textarea>{" "}
            <div className="submit">
              <input className="csubmit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
