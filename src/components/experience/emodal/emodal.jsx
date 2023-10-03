import React, { useContext } from "react"
import { themeContext } from "../../../Context"
import "./emodal.css"

const Emodal = ({ years, bwording, owording }) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="emodal">
      <div
        className="years"
        style={darkMode ? { color: "black" } : { color: "black" }}
      >
        {years}
      </div>
      <span>{bwording}</span>
      <span>{owording}</span>
    </div>
  )
}

export default Emodal
