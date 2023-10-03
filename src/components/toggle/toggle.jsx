import React from "react"

import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import "./toggle.css"
import { themeContext } from "../../Context"
import { useContext } from "react"
const Toggle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    theme.dispatch({ type: "toggle" })
  }
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <button
        className="t-toggle"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></button>
    </div>
  )
}

export default Toggle
