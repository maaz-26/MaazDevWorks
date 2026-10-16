import { CheckCircle2, CodeXml, Laptop, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const experience = ['Business websites', 'E-commerce platforms', 'Booking applications', 'Admin dashboards', 'Custom web applications', 'Maintenance & bug fixing']

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="profile-card"><div className="profile-monogram">MN</div><div className="profile-info"><strong>Maaz Nafees</strong><span>Full-Stack Web Developer</span><p><MapPin size={15} /> India · Available worldwide</p></div></div>
          <div className="about-panel"><div><CodeXml /><span>Clean<br/><b>Development</b></span></div><div><Laptop /><span>Practical<br/><b>Solutions</b></span></div></div>
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <SectionHeading eyebrow="About Me" title="Turning ideas into reliable digital experiences." align="left" />
          <p>I&apos;m a full-stack web developer focused on building thoughtful, modern websites and applications that solve real business needs. I combine clean front-end experiences with practical back-end development to create solutions that are both polished and dependable.</p>
          <p>I have hands-on experience building and maintaining real-world web applications and collaborating with development teams. I value clear communication, maintainable code, and getting the important details right.</p>
          <div className="experience-list">{experience.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}</div>
          <a href="#contact" className="text-link">Let&apos;s discuss your project <span>→</span></a>
        </Reveal>
      </div>
    </section>
  )
}
