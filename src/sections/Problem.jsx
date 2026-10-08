import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { PROBLEMS, REVERSE, PILLARS } from '../data'
import { Reveal, SectionHeading } from '../components/ui'
import { CheckItem } from './About'
import collab from '../assets/img/collab.webp'
import student from '../assets/img/student.webp'
import youth from '../assets/img/youth.webp'

const VISUALS = [null, collab, student, youth]
const FOCUS = ['center', 'center', '80% 25%', 'center']

export function Problem() {
  const [active, setActive] = useState(0)
  const p = PROBLEMS[active]

  return (
    <section id="problem" className="relative overflow-hidden bg-forest-900 py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="The Problem We Are Solving"
          title="Enormous potential, held back by deep-rooted challenges."
          intro="Osun State holds enormous cultural, intellectual, and entrepreneurial potential, yet faces several economic challenges that OLEC was built to confront."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Tabs */}
          <div role="tablist" aria-label="Challenges" className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:flex lg:flex-col">
            {PROBLEMS.map((item, i) => {
              const Icon = item.icon
              const on = i === active
              return (
                <button
                  key={item.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    on ? 'border-gold-500/60 bg-gold-500/10' : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                  }`}
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors ${on ? 'bg-gold-500 text-forest-900' : 'bg-white/10 text-gold-300'}`}>
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50">Challenge {i + 1}</span>
                    <span className="block font-display text-sm font-semibold sm:text-base">{item.title}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div key={active} role="tabpanel" className="reveal is-visible overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:col-span-8">
            <div className="grid h-full md:grid-cols-2">
              <div className="p-7 sm:p-10">
                <span className="font-display text-6xl font-extrabold text-gold-500/30">0{active + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-white/75">{p.body}</p>
                {p.points.length > 0 && (
                  <>
                    <p className="mt-6 font-semibold text-gold-300">{p.lead}</p>
                    <ul className="mt-3 space-y-2.5 text-white/85">
                      {p.points.map((pt) => (
                        <CheckItem dark key={pt}>{pt}</CheckItem>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {VISUALS[active] ? (
                <img src={VISUALS[active]} alt="" className="h-64 w-full object-cover md:h-full" style={{ objectPosition: FOCUS[active] }} loading="lazy" />
              ) : (
                <div className="flex flex-col justify-center gap-4 bg-gold-500 p-8 text-forest-900 sm:p-10">
                  <p className="font-display text-sm font-bold tracking-widest uppercase">OLEC shifts the narrative</p>
                  <p className="font-sans text-xl italic opacity-60">“Osun is waiting for allocation”</p>
                  <ArrowDown className="size-6" />
                  <p className="font-display text-2xl leading-snug font-bold">
                    “Osun is building its own wealth through businesses, innovation, and collaboration.”
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reverse the trend */}
        <div className="mt-20 grid items-center gap-10 rounded-3xl bg-white/[0.03] p-8 ring-1 ring-white/10 sm:p-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-2xl leading-snug font-bold sm:text-3xl">
              We believe a student in Osun can create a <span className="text-gold-400">global idea</span> before graduation, if the right environment exists.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm tracking-widest text-white/50 uppercase">OLEC is committed to making Osun a place</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {REVERSE.map((r) => (
                <li key={r} className="rounded-xl border border-white/10 px-4 py-3 text-white/85">{r}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Pillars() {
  return (
    <section id="pillars" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="What OLEC Brings to the Table"
          title="A 4-pillar solution model"
          intro="To address these gaps, the Osun Local Economy Conference is built on four pillars that turn conversation into lasting economic action."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="group relative overflow-hidden rounded-3xl border border-forest-800/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-forest-800 hover:shadow-2xl hover:shadow-forest-900/20 sm:p-10"
              >
                <span className="pointer-events-none absolute -top-6 right-4 font-display text-[9rem] leading-none font-extrabold text-forest-800/5 transition-colors duration-500 group-hover:text-white/5">
                  {i + 1}
                </span>
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-forest-800 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-forest-900">
                    <Icon className="size-6" />
                  </span>
                  <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase group-hover:text-gold-400">Pillar {i + 1}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-forest-800 transition-colors duration-500 group-hover:text-white">{p.title}</h3>
                  <ul className="mt-6 space-y-3 text-ink/75 transition-colors duration-500 group-hover:text-white/80">
                    {p.items.map((it) => (
                      <CheckItem key={it}>{it}</CheckItem>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
