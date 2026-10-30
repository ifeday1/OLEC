import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Flyer from './sections/Flyer'
import { Marquee, About, VisionMission } from './sections/About'
import { Problem, Pillars } from './sections/Problem'
import { Programme, Audience, Speakers, Sponsors } from './sections/Programme'
import { StandsFor, FAQ, Contact, Footer } from './sections/Closing'
import { Button } from './components/ui'
import { LINKS } from './config'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Flyer />
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
      <Button
        href={LINKS.register}
        className="fixed right-4 bottom-4 z-50 shadow-lg shadow-forest-900/30 sm:right-6 sm:bottom-6"
      >
        Register Now
      </Button>
    </>
  )
}
