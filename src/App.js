import Navbar from "./components/navbar/navbar"
import "./App.css"

import Intro from "./components/intro/intro"
import Services from "./components/services/services"
import Experience from "./components/experience/experience"
// import Works from "./components/works/works"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import { themeContext } from "./Context"
import { useContext } from "react"
// import Testimonial from "./components/testimonial/project"

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      {/* <Works /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
