import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  return <section className="section contact" id="contact"><div className="container"><Reveal><div className="contact-card"><div className="contact-glow" /><div className="contact-icon"><MessageCircle /></div><span className="eyebrow"><span />Start a Conversation</span><h2>Have a Project in Mind?</h2><p>Let&apos;s turn your idea into a modern, functional website.</p><a className="button button--light" href="https://www.fiverr.com/maazdevworks" target="_blank" rel="noreferrer">Hire Me on Fiverr <ArrowUpRight /></a><div className="contact-points"><span><Check /> Secure Fiverr communication</span><span><Check /> Clear project scope</span><span><Check /> Professional delivery</span></div></div></Reveal></div></section>
}
