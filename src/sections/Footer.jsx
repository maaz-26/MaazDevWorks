import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Footer() {
  return <footer><div className="container footer-main"><div><a href="#home" className="brand"><span className="brand-mark">M</span><span>MaazDev<span>Works</span></span></a><p>Modern web development for businesses that care about quality.</p></div><div className="footer-links"><strong>Quick links</strong>{navLinks.slice(0, 5).map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</div><div className="footer-links"><strong>Work with me</strong><a href="https://www.fiverr.com/maazdevworks" target="_blank" rel="noreferrer">Fiverr Profile <ArrowUpRight /></a><a href="#contact">Start a project</a></div><a href="#home" className="back-top" aria-label="Back to top"><ArrowUp /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MaazDevWorks. All rights reserved.</span><span>Designed & built by Maaz Nafees</span></div></footer>
}
