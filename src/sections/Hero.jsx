import { ArrowDown, ArrowUpRight, Braces, Code2, Layers3, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow--one" /><div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <div className="availability"><span /> Available for freelance projects</div>
          <h1>Building Modern Websites That Help <em>Businesses Grow.</em></h1>
          <p>I&apos;m Maaz Nafees, a Full-Stack Web Developer specializing in responsive websites, React applications, e-commerce platforms, dashboards, and custom web solutions.</p>
          <div className="hero-actions">
            <a className="button" href="#projects">View My Work <ArrowDown size={18} /></a>
            <a className="button button--ghost" href="https://www.fiverr.com/maazdevworks" target="_blank" rel="noreferrer">Hire Me on Fiverr <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-meta"><span>Based in India</span><i /> <span>Working worldwide</span></div>
        </Reveal>
        <Reveal className="hero-art" delay={150}>
          <div className="code-window">
            <div className="code-top"><div><i /><i /><i /></div><span>project.jsx</span><Braces size={17} /></div>
            <div className="code-body" aria-label="Decorative code illustration">
              <div><span className="num">01</span><span className="pink">const</span> <span className="blue">developer</span> = {'{'}</div>
              <div><span className="num">02</span>&nbsp;&nbsp;name: <span className="green">&apos;Maaz Nafees&apos;</span>,</div>
              <div><span className="num">03</span>&nbsp;&nbsp;craft: <span className="green">&apos;Web Experiences&apos;</span>,</div>
              <div><span className="num">04</span>&nbsp;&nbsp;focus: [</div>
              <div><span className="num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&apos;Clean Code&apos;</span>,</div>
              <div><span className="num">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&apos;Great UX&apos;</span>,</div>
              <div><span className="num">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">&apos;Real Results&apos;</span></div>
              <div><span className="num">08</span>&nbsp;&nbsp;]</div>
              <div><span className="num">09</span>{'}'};</div>
              <div><span className="num">10</span><span className="pink">export default</span> developer;</div>
            </div>
            <div className="code-status"><span><i /> Ready to build</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
          </div>
          <div className="floating-chip floating-chip--react"><Code2 /> React.js</div>
          <div className="floating-chip floating-chip--quality"><Sparkles /> Quality first</div>
          <div className="floating-icon"><Layers3 /></div>
        </Reveal>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDown /></a>
    </section>
  )
}
