import { Code2, Bug, LayoutTemplate, ShoppingBag, Wrench, Globe2 } from 'lucide-react'

export const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact']

export const services = [
  { icon: Globe2, title: 'Website Development', description: 'Fast, professional websites tailored to your business, audience, and goals.' },
  { icon: Code2, title: 'React.js Development', description: 'Interactive, scalable React interfaces with clean and reusable components.' },
  { icon: Bug, title: 'Website Bug Fixing', description: 'Careful troubleshooting and reliable fixes for layout, logic, and functionality issues.' },
  { icon: LayoutTemplate, title: 'Responsive Website Design', description: 'Polished user experiences that work beautifully across every screen size.' },
  { icon: ShoppingBag, title: 'E-commerce Development', description: 'User-friendly online stores and commerce flows designed for easy shopping.' },
  { icon: Wrench, title: 'Website Maintenance', description: 'Ongoing updates, improvements, and technical care to keep your website healthy.' },
]

export const skillGroups = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Bootstrap', 'Responsive Design'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MySQL', 'SQL Server'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
}
