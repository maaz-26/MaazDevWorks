import { ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="section section--tinted projects" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected Experience" title="Projects built for real-world needs." description="Examples of the types of platforms and digital products I have development experience with." />
        <div className="projects-grid">{projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 70}>
            <article className={`project-card project-card--${project.accent}`}><ProjectVisual type={project.visual} /><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><details className="project-details"><summary className="project-action">Project Overview <ChevronDown /></summary><p>This card represents hands-on development experience in this project category. Approved screenshots and verified public links can be added when available.</p></details></div></article>
          </Reveal>
        ))}</div>
        <p className="projects-footnote">Interested in a similar project? <a href="https://www.fiverr.com/maazdevworks" target="_blank" rel="noreferrer">Tell me what you need →</a></p>
      </div>
    </section>
  )
}
