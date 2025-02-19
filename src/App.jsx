import { BrowserRouter  } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Feedback from "./components/Feedback"
import Works from "./components/Works"
import Tech from "./components/Tech"
import Contact from "./components/Contact"
import Stars from "./components/canvas/Stars"

document.addEventListener('contextmenu', (e) => {
  e.stopPropagation(); // Разрешает контекстное меню
}, { capture: true });


function App() {

  return (
    <BrowserRouter>
        <div className="relative z-10 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedback/>
          <div className="relative z-0">
            <Contact/>
            <Stars/>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
