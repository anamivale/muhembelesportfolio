import React from "react"
import Emodal from "./emodal/emodal"
import "./experience.css"

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <h3 className="e-title">Experience</h3>
      <div className="ex">
        <Emodal years="2+" bwording="years" owording="Experience" />
        <Emodal years="1" bwording="Completed" owording="Project" />
        <Emodal years="1" bwording="Company" owording="work" />
      </div>
    </div>
  )
}

export default Experience
