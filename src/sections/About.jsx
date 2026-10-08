import { ArrowLeftRight, Target, Check } from 'lucide-react'
import { BRIDGES, MARQUEE, MISSION } from '../data'
import { Reveal, SectionHeading, Eyebrow } from '../components/ui'
import summary from '../assets/img/summary.webp'
import about from '../assets/img/about.webp'

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="overflow-hidden border-y border-forest-900/10 bg-gold-500 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {items.map((w, i) => (
          <span key={i} className="flex items-center font-display text-lg font-bold tracking-wide text-forest-900 uppercase">
            <span className="px-6">{w}</span>
            <span className="text-forest-900/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Executive Summary"
              title="More than an event: a movement to rebuild Osun's economy from the inside out."
            />
            <Reveal delay={100} className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                The Osun Local Economy Conference (OLEC) is a yearly, impact-driven conference designed to catalyze economic
                transformation in Osun State by empowering youths, entrepreneurs, professionals, innovators, and policymakers with
                the tools, partnerships, networks, and mindset needed to build sustainable businesses and careers within the state.
              </p>
              <p>
                It brings together local and diaspora Osun professionals, student innovators, business owners, investors, and
                government stakeholders to collectively tackle the state's long-standing challenges.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <img src={about} alt="A speaker addressing the press" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
            <img
              src={summary}
              alt="Business professionals in a meeting"
              className="absolute -bottom-10 -left-6 hidden w-1/2 rounded-2xl border-8 border-cream object-cover shadow-xl sm:block"
              loading="lazy"
            />
            <div className="absolute -top-6 -right-4 max-w-[15rem] rounded-2xl bg-forest-800 p-5 text-white shadow-xl sm:-right-6">
              <p className="font-display text-sm font-semibold text-gold-400">Core mission</p>
              <p className="mt-1 text-sm leading-snug text-white/85">
                Help Osun businesses and talents grow from local to global.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bridges */}
        <div className="mt-28">
          <Reveal className="text-center">
            <Eyebrow>OLEC serves as a bridge between</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRIDGES.map(([a, b], i) => (
              <Reveal
                key={a}
                delay={i * 80}
                className="group rounded-2xl border border-forest-800/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-forest-900/5"
              >
                <p className="font-display text-lg font-bold text-forest-800">{a}</p>
                <ArrowLeftRight className="my-3 size-5 text-gold-500 transition-transform duration-300 group-hover:scale-125" />
                <p className="font-display text-lg font-bold text-forest-800">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-forest-800 p-8 text-white sm:p-12 lg:col-span-5">
          <div className="absolute -right-20 -bottom-20 size-72 rounded-full border-[40px] border-white/5" />
          <div className="absolute -right-4 -bottom-4 size-36 rounded-full border-[24px] border-gold-500/20" />
          <span className="grid size-14 place-items-center rounded-2xl bg-gold-500 text-forest-900">
            <Target className="size-7" />
          </span>
          <h2 className="mt-8 font-display text-3xl font-bold sm:text-4xl">The Vision</h2>
          <p className="relative mt-5 text-lg leading-relaxed text-white/80">
            To build a <span className="text-gold-300">thriving, self-sustaining local economy</span> in Osun State by empowering
            youths, entrepreneurs, and professionals to create value-driven businesses and opportunities that can scale
            globally, reducing dependency on federal allocation and transforming Osun into a hub of innovation and economic
            growth.
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow="The Mission" title="Eight commitments driving OLEC" />
          <ol className="mt-10 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {MISSION.map((m, i) => (
              <Reveal as="li" key={i} delay={i * 50} className="flex gap-4 border-t border-forest-800/10 py-5">
                <span className="font-display text-sm font-bold text-gold-600 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-ink/80">{m}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function CheckItem({ children, dark = false }) {
  return (
    <li className="flex gap-3">
      <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${dark ? 'bg-gold-500/20 text-gold-400' : 'bg-forest-800/10 text-forest-700'}`}>
        <Check className="size-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  )
}
