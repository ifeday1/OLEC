import { ArrowUpRight, UserRound, Plus } from 'lucide-react'
import { PROGRAMME, AUDIENCE, SPEAKER_TRACKS } from '../data'
import { LINKS } from '../config'
import { Reveal, SectionHeading, Button } from '../components/ui'
import stage from '../assets/img/stage.webp'

export function Programme() {
  return (
    <section id="programme" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The Experience"
            title="What happens at OLEC"
            intro="Six formats designed to move you from inspiration to execution, with connections that last beyond the conference."
          />
          <Reveal>
            <Button href={LINKS.register} variant="dark">
              Save my seat
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMME.map((item, i) => {
            const Icon = item.icon
            if (item.featured) {
              return (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 p-8 text-forest-900 sm:row-span-2 lg:row-span-1"
                >
                  <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-white/20" />
                  <Icon className="size-8" />
                  <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 font-display text-4xl font-extrabold tracking-tight">₦1,000,000</p>
                  <p className="mt-3 text-forest-900/80">{item.body}</p>
                  <a href={LINKS.pitch} target="_blank" rel="noopener noreferrer" className="relative mt-6 inline-flex items-center gap-1 font-display text-sm font-bold underline-offset-4 hover:underline">
                    Express interest <ArrowUpRight className="size-4" />
                  </a>
                </Reveal>
              )
            }
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="group rounded-3xl border border-forest-800/10 bg-cream p-8 transition-all duration-300 hover:border-gold-500/40 hover:bg-white hover:shadow-xl hover:shadow-forest-900/5"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-forest-800 text-gold-400 transition-transform duration-300 group-hover:-rotate-6">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-forest-800">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Audience() {
  return (
    <section id="audience" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Who This Conference Is For"
              title="Strategically designed for Osun's builders"
              intro="Whether you're starting out, scaling up, or shaping policy, OLEC is your room."
            />
            <Reveal delay={100}>
              <img src={stage} alt="Speakers on stage at a conference" className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
        <div className="grid gap-5 lg:col-span-7">
          {AUDIENCE.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal
                key={a.title}
                delay={i * 80}
                className="group flex gap-6 rounded-3xl border border-forest-800/10 bg-white p-7 transition-all duration-300 hover:border-forest-800 sm:p-9"
              >
                <span className="font-display text-sm font-bold text-gold-600">0{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-forest-800 sm:text-2xl">{a.title}</h3>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-cream text-forest-800 transition-colors duration-300 group-hover:bg-gold-500">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink/70">{a.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Speakers() {
  return (
    <section id="speakers" className="bg-forest-800 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            dark
            eyebrow="Speakers"
            title="Voices shaping the new Osun economy"
            intro="Keynotes from experts across business, policy, technology, creative industries, finance, education, and entrepreneurship. Speakers will be announced soon."
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SPEAKER_TRACKS.map((track, i) => (
            <Reveal key={track} delay={(i % 4) * 70} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-b from-forest-700 to-forest-900 ring-1 ring-white/10">
                <div className="bg-grid absolute inset-0 opacity-60" />
                <UserRound className="absolute inset-x-0 bottom-0 mx-auto size-3/4 text-white/[0.07] transition-transform duration-500 group-hover:scale-105" strokeWidth={1} />
                <span className="absolute top-4 left-4 rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-gold-300 uppercase ring-1 ring-gold-500/30">
                  {track}
                </span>
              </div>
              <p className="mt-4 font-display font-semibold">To be announced</p>
              <p className="text-sm text-white/50">{track} keynote</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Sponsors() {
  return (
    <section id="partners" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-ink/50 uppercase">Partners & Sponsors</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal
              key={i}
              delay={i * 50}
              className="grid h-24 place-items-center rounded-2xl border border-dashed border-forest-800/20 text-sm text-ink/40"
            >
              Your logo here
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-8 ring-1 ring-forest-800/10 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-forest-800">Invest in Osun's next chapter</h3>
            <p className="mt-2 max-w-xl text-ink/70">
              Put your brand at the centre of a movement connecting youths, SMEs, investors, the diaspora, and government.
            </p>
          </div>
          <Button href={LINKS.sponsorDeck} download="OLEC Partnership & Sponsorship.pdf" variant="dark" className="shrink-0">
            <Plus className="size-4" /> Become a sponsor
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
