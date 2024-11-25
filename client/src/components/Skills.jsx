// import { Code, Database, Layout } from 'lucide-react'

import { FaCode, FaDatabase, FaTable } from "react-icons/fa"

const skills = [
  {
    name: 'Frontend',
    icon: FaTable,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: FaDatabase,
    technologies: ['Python', 'Django', 'PyTest', 'SQL', 'Postgres']
  },
  {
    name: 'Otros',
    icon: FaCode,
    technologies: ['Git', 'RESTful APIs', 'PyTest']
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
            <skill.icon className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
            <ul className="space-y-2">
              {skill.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

