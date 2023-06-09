import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Works from "./components/Works"
import Contact from "./components/Contact"

import {BsArrowUpSquareFill} from "react-icons/bs"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:4000"

function App() {
  return (
    <div className="px-8 pb-16 relative">
      <Header />
      <Hero />
      <AboutMe />
      <Works />
      <Contact />

      <div
        onClick={() => {
          window.scrollTo(0,0)
        }}
       className="underline text-center text-white cursor-pointer">
        Go back to top
      </div>

     </div>
  )
}

export default App
