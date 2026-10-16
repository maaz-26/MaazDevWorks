import { Gauge, MessagesSquare, ShieldCheck, Smartphone, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const benefits = [
  { icon: Smartphone, title: 'Responsive by default', text: 'Every interface is built to feel right on mobile, tablet, and desktop.' },
  { icon: ShieldCheck, title: 'Clean, maintainable code', text: 'Thoughtful structure makes future updates and collaboration easier.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'Straightforward updates keep expectations and progress aligned.' },
  { icon: Wrench, title: 'Support that continues', text: 'Help with bug fixes, refinements, and ongoing website maintenance.' },
  { icon: Gauge, title: 'Usability & performance', text: 'Decisions are guided by clarity, speed, and a smooth user experience.' },
]

export default function WhyMe() {
  return <section className="section why"><div className="container"><SectionHeading eyebrow="Why Work With Me" title="A dependable partner for your next build." description="Professional development is more than code. It is careful thinking, honest communication, and a product that is easy to use." /><div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 55}><article><Icon /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
}
