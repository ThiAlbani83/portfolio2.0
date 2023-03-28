import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Skills from "./components/skills/Skills"
import {hero, aboutMe, skills} from './data/data'

function App() {

  return (
    <div>
      <Navbar />
      <Hero hero={hero} />
      <About aboutMe={aboutMe} />
      <Skills skills={skills} />
    </div>
  )
}

export default App 
