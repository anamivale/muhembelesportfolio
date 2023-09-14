import Navbar from "./components/navbar/navbar"
import "./App.css"

import Intro from "./components/intro/intro"
import Services from "./components/services/services"
import Experience from "./components/experience/experience"
import Works from "./components/works/works"
import Project from "./components/projects/project"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
