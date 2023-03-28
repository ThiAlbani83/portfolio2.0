import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Skills from "./components/skills/Skills"
import {hero, aboutMe, skills} from './data/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./components/portfolio/Portfolio"

function App() {

  return (
    <div className="bg-[#1f242d] text-gray-500">
      <Navbar />
      <Hero hero={hero} />
      <About aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Portfolio />
    </div>
  )
}

export default App 
