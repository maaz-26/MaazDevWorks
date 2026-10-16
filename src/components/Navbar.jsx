import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

const fiverrUrl = 'https://www.fiverr.com/maazdevworks'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 20)
    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })
    return () => window.removeEventListener('scroll', updateNav)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const scrollPosition = window.scrollY
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const closeOnDesktop = () => {
      if (window.innerWidth > 760) setOpen(false)
    }

    document.documentElement.classList.add('menu-open')
    document.body.classList.add('menu-open')
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnDesktop)

    return () => {
      document.documentElement.classList.remove('menu-open')
      document.body.classList.remove('menu-open')
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnDesktop)
      window.scrollTo(0, scrollPosition)
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="MaazDevWorks home">
          <span className="brand-mark">M</span><span>MaazDev<span>Works</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={`nav-menu ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a className="button button--small" href={fiverrUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Hire Me <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>
  )
}
