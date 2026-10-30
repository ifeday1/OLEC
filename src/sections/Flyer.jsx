import { ArrowRight, CalendarDays, Clock, Download, MapPin } from 'lucide-react'
import { THEME } from '../data'
import { EVENT, LINKS } from '../config'
import { Reveal, Eyebrow, Button } from '../components/ui'
import flyer from '../assets/img/flyer.jpg'

export default function Flyer() {
  const date = new Date(EVENT.date)
  const details = [
    { icon: CalendarDays, label: 'Date', value: EVENT.dateConfirmed ? date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : EVENT.dateLabel },
    { icon: Clock, label: 'Time', value: date.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Africa/Lagos' }) },
    { icon: MapPin, label: 'Venue', value: EVENT.venue },
  ]

  return (
    <section id="event" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <a href={flyer} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={flyer}
              alt={`OLEC'26 event flyer: ${THEME}. Speakers, date, time and venue.`}
              className="w-full rounded-3xl shadow-2xl shadow-forest-900/20 ring-1 ring-forest-800/10"
            />
          </a>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Theme for #OLEC'26</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight font-extrabold tracking-tight text-forest-800 sm:text-5xl lg:text-6xl">
              Economy Beyond <span className="text-gold-500">Allocation</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              A day of keynotes, conversations and connections on building an Osun economy that thrives on its own people,
              businesses and ideas.
            </p>
          </Reveal>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {details.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={i * 70} className="rounded-2xl border border-forest-800/10 bg-cream p-5">
                <dt className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-600 uppercase">
                  <Icon className="size-4" /> {label}
                </dt>
                <dd className="mt-2 font-display font-semibold text-forest-800">{value}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={LINKS.register} variant="dark">
              Register Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={flyer} download="OLEC26-Flyer.jpg" variant="outline">
              <Download className="size-4" /> Download flyer
            </Button>
            <Button href="#speakers" variant="outline" external={false}>
              Meet the speakers
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
