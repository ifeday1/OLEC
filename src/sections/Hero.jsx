import { ArrowRight, CalendarDays, MapPin, Trophy, Layers, Users } from 'lucide-react'
import { EVENT, LINKS } from '../config'
import { Button, WhatsAppIcon } from '../components/ui'
import Countdown from '../components/Countdown'
import hero from '../assets/img/hero.webp'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-900 pt-28 pb-16 sm:pt-36 lg:pb-24">
      {/* Background atmosphere */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -right-40 -z-10 size-[40rem] rounded-full bg-gold-500/15 blur-3xl" />
      <div className="absolute -bottom-60 -left-40 -z-10 size-[36rem] rounded-full bg-forest-600/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-gold-400" />
            </span>
            #OLEC'26 · Annual Conference
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Osun Local <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">Economy</span> Conference
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Building a <strong className="font-bold text-white">local-to-global</strong> economic movement for Osun State,
            where businesses thrive, youths create global opportunities from home, and growth is community-driven.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-gold-400" />
              {EVENT.dateConfirmed
                ? new Date(EVENT.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                : EVENT.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-gold-400" />
              {EVENT.venue}
              {!EVENT.venueConfirmed && <span className="text-white/50">(venue TBA)</span>}
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={LINKS.register}>
              <WhatsAppIcon /> Register Interest
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={LINKS.sponsor} variant="ghost">
              Partner with OLEC
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] border border-gold-500/30" />
            <img
              src={hero}
              alt="Young professionals collaborating over a laptop"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/40"
              fetchPriority="high"
            />

            <FloatCard className="-bottom-6 -left-4 sm:-left-10" icon={Trophy} kicker="Innovation Pitch" value="₦1,000,000" note="in grants" />
            <FloatCard className="-top-6 -right-3 sm:-right-8 [animation-delay:-3s]" icon={Layers} kicker="Solution model" value="4 Pillars" />
            <FloatCard className="right-6 -bottom-10 hidden sm:flex [animation-delay:-1.5s]" icon={Users} kicker="Built for" value="Youths 18–45" light />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">The countdown to #OLEC'26 has begun</p>
            <p className="mt-1 text-sm text-white/60">
              {EVENT.dateConfirmed ? 'Save the date and bring your network.' : 'Provisional date: final date to be confirmed.'}
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatCard({ icon: Icon, kicker, value, note, className = '', light = false }) {
  return (
    <div
      className={`absolute flex animate-float items-center gap-3 rounded-2xl px-4 py-3 shadow-xl ${
        light ? 'bg-white text-forest-800' : 'bg-forest-800/95 text-white ring-1 ring-white/10 backdrop-blur'
      } ${className}`}
    >
      <span className={`grid size-10 place-items-center rounded-xl ${light ? 'bg-forest-800 text-gold-400' : 'bg-gold-500 text-forest-900'}`}>
        <Icon className="size-5" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[11px] tracking-wider uppercase ${light ? 'text-forest-800/60' : 'text-white/60'}`}>{kicker}</span>
        <span className="block font-display text-lg font-bold">
          {value} {note && <span className="text-xs font-normal opacity-70">{note}</span>}
        </span>
      </span>
    </div>
  )
}
