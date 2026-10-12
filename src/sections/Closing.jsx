import { useState } from 'react'
import { Plus, Mail, ArrowUp } from 'lucide-react'
import { STANDS_FOR, FAQS, NAV } from '../data'
import { CONTACT, LINKS, SOCIALS, EVENT } from '../config'
import { Reveal, SectionHeading, Button, WhatsAppIcon } from '../components/ui'
import logo from '../assets/img/logo-gold.png'

export function StandsFor() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-24 text-forest-900 sm:py-32">
      <div className="absolute -top-32 -left-32 size-96 rounded-full border-[60px] border-forest-900/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-display text-xs font-bold tracking-[0.2em] uppercase">What OLEC Ultimately Stands For</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-bold sm:text-5xl">
            Not just another conference. A collective movement.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {STANDS_FOR.map((s, i) => (
            <Reveal
              key={s}
              delay={i * 50}
              className="rounded-full border border-forest-900/20 bg-white/30 px-5 py-3 font-semibold backdrop-blur transition-colors hover:bg-forest-900 hover:text-gold-300"
            >
              {s}
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <blockquote className="mt-16 max-w-4xl border-l-4 border-forest-900 pl-6 font-display text-2xl leading-snug font-bold italic sm:text-3xl">
            It is the birthplace of the new Osun economy, one built on business, innovation, and collaboration rather than allocation alone.
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="pt-4 pb-24 sm:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" intro="Can't find what you're looking for? Reach the team on WhatsApp or email." />
        </div>
        <div className="divide-y divide-forest-800/10 border-y border-forest-800/10 lg:col-span-8">
          {FAQS.map((f, i) => {
            const on = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold text-forest-800">{f.q}</span>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${on ? 'rotate-45 bg-forest-800 text-gold-400' : 'bg-white text-forest-800 ring-1 ring-forest-800/10'}`}>
                    <Plus className="size-4" />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden pr-12 leading-relaxed text-ink/70">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="relative">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">#OLEC'26</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight font-bold text-white text-balance sm:text-5xl">
            Be part of the movement building Osun from the inside out.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Register your interest, apply for the pitch competition, or partner with us. We'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={LINKS.whatsapp}>
              <WhatsAppIcon /> Chat on WhatsApp
            </Button>
            <Button href={LINKS.sponsor} variant="ghost">
              <Mail className="size-4" /> Email the team
            </Button>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-2 text-sm text-white/60 sm:flex-row sm:gap-8">
            <span>{CONTACT.whatsappDisplay}</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">{CONTACT.email}</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <img src={logo} alt="Osun Local Economy Conference" className="h-24 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Building a local-to-global economic movement for Osun State. {EVENT.venue}.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-gold-300">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-display text-sm font-semibold text-white">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">WhatsApp: {CONTACT.whatsappDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">{CONTACT.email}</a></li>
            {SOCIALS.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Osun Local Economy Conference. All rights reserved.</p>
          <a href="#top" className="grid size-9 place-items-center rounded-full ring-1 ring-white/15 hover:text-gold-300" aria-label="Back to top">
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
