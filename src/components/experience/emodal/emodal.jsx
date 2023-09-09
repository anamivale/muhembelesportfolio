import React from "react"
import("./emodal.css")
const Emodal = ({ years, bwording, owording }) => {
  return (
    <div className="emodal">
      <div className="years">{years}</div>
      <span>{bwording}</span>
      <span>{owording}</span>
    </div>
  )
}

export default Emodal
