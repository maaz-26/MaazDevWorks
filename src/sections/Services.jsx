import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { services } from '../data/content'

export default function Services() {
  return (
    <section className="section section--tinted" id="services">
      <div className="container">
        <SectionHeading eyebrow="What I Do" title="Development services built around your goals." description="From a new website to a difficult bug, I deliver focused solutions with care and attention to detail." />
        <div className="services-grid">{services.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 60}>
            <article className="service-card"><div className="service-icon"><Icon /></div><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p><a href="https://www.fiverr.com/maazdevworks" target="_blank" rel="noreferrer">Discuss on Fiverr <ArrowUpRight /></a></article>
          </Reveal>
        ))}</div>
      </div>
    </section>
  )
}
