import React from 'react';
import { FaCode, FaCss3Alt, FaDatabase, FaGit, FaGithub, FaHtml5, FaJsSquare, FaPlus, FaPython, FaReact, FaTable } from "react-icons/fa";

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
];

const techDetails = {
  HTML: { name: 'HTML', icon: <FaHtml5 /> },
  CSS: { name: 'CSS', icon: <FaCss3Alt /> },
  JavaScript: { name: 'JavaScript', icon: <FaJsSquare /> },
  React: { name: 'React', icon: <FaReact /> }, // Asegúrate de importar FaReact si es necesario
  'Tailwind CSS': { name: 'Tailwind CSS', icon: <FaPlus /> } // Asegúrate de importar SiTailwindcss si es necesario
};

const Wa = [
  {
    name: 'Frontend',
    technologies: {
      HTML: { name: 'HTML', icon: <FaHtml5 /> },
      CSS: { name: 'CSS', icon: <FaCss3Alt /> },
      JavaScript: { name: 'JavaScript', icon: <FaJsSquare /> },
      React: { name: 'React', icon: <FaReact /> },
      'Tailwind CSS': { name: 'Tailwind CSS', icon: <FaPlus /> }
    }
  },
  {
    name: 'Backend',
    technologies: {
      Django: { name: 'Django', icon: <FaHtml5 /> },
      Python: { name: 'Python', icon: <FaPython /> },
    }
  },
  {
    name: 'Otros',
    technologies: {
      Git: { name: 'Git', icon: <FaGit /> },
      Github: { name: 'Github', icon: <FaGithub /> },
      Pytest: { name: 'Pytest', icon: <FaPython /> },
    }
  },
];

console.log(Wa);
export default function Skills() {
  return (
    <section id="habilidades" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Wa.map((skill, index) => (
          <div key={skill.name} className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="text-3xl font-semibold mb-4">{skill.name}</h3>
            <ul className="space-y-2"> {Object.entries(skill.technologies).map(([tech, details]) => (
              <li key={tech} className="flex items-center space-x-2">
                {details.icon}<span>{details.name}</span>
              </li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}