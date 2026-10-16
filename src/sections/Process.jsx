import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const steps = [
  ['01', 'Discuss Requirements', 'We clarify your goals, audience, scope, and the most important features.'],
  ['02', 'Plan and Design', 'I organize the experience and define a clear direction before development.'],
  ['03', 'Develop and Test', 'The solution is built responsively, reviewed carefully, and tested across devices.'],
  ['04', 'Deliver and Support', 'You receive the completed work with clear handoff and continued support options.'],
]

export default function Process() {
  return <section className="section section--tinted process"><div className="container"><SectionHeading eyebrow="How It Works" title="A simple, transparent process." description="A clear workflow keeps your project organized from the first conversation to final delivery." /><div className="process-grid">{steps.map(([number, title, text], index) => <Reveal key={number} delay={index * 80}><article><span>{number}</span><div className="process-dot" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
}
