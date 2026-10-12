import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { LINKS } from '../config'
import { Button } from '../components/ui'
import mark from '../assets/img/mark-gold.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-forest-900/90 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="OLEC home">
          <img src={mark} alt="" className="h-8 w-auto" />
          <span className="leading-none">
            <span className="block font-display text-sm font-bold tracking-wide text-white">OLEC'26</span>
            <span className="block text-[11px] text-white/60">Osun Local Economy Conference</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href={LINKS.register} className="!px-5 !py-2.5">
              Register
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? 'max-h-[100svh]' : 'max-h-0'}`}
      >
        <ul className="flex h-[calc(100svh-4.5rem)] flex-col gap-1 px-4 pt-4 pb-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="mt-auto">
            <Button href={LINKS.register} className="w-full !py-4" onClick={() => setOpen(false)}>
              Register Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
