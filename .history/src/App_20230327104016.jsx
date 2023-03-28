import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import {hero} from '../../data/hero.js'

function App() {

  return (
    <div>
      <Navbar />
      <Hero hero={hero} />
      <About />
    </div>
  )
}

export default App 
