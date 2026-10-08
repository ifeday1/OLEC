import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { Marquee, About, VisionMission } from './sections/About'
import { Problem, Pillars } from './sections/Problem'
import { Programme, Audience, Speakers, Sponsors } from './sections/Programme'
import { StandsFor, FAQ, Contact, Footer } from './sections/Closing'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <VisionMission />
        <Problem />
        <Pillars />
        <Programme />
        <Audience />
        <Speakers />
        <StandsFor />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
