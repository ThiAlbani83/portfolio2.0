import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Skills from "./components/skills/Skills"
import {hero, aboutMe, skills} from './data/data'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="bg-gray-600">
      <Navbar />
      <Hero hero={hero} />
      <About aboutMe={aboutMe} />
      <Skills skills={skills} />
    </div>
  )
}

export default App 
