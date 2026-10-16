import { Database, ServerCog, TerminalSquare, MonitorSmartphone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/content'

const icons = { Frontend: MonitorSmartphone, Backend: ServerCog, Database, Tools: TerminalSquare }

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container skills-grid">
        <Reveal><SectionHeading eyebrow="Technical Toolkit" title="The tools behind the work." description="A focused technology stack for building responsive interfaces, dependable APIs, and maintainable web applications." align="left" /><div className="skills-note"><span>Always learning.</span> Always improving the way I build.</div></Reveal>
        <div className="skill-groups">{Object.entries(skillGroups).map(([group, skills], index) => {
          const Icon = icons[group]
          return <Reveal key={group} delay={index * 70}><article className="skill-group"><div className="skill-title"><Icon /><h3>{group}</h3></div><div className="skill-badges">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>
        })}</div>
      </div>
    </section>
  )
}
