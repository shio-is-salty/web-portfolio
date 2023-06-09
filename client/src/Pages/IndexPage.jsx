import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Works from "../components/Works"
import Contact from "../components/Contact"
const IndexPage = () => {
    return (
    <div className="px-8 pb-16">
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

export default IndexPage