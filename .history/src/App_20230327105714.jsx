import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import {hero, aboutMe} from './data/data'

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
