const experiences = [
  {
    title: 'Desarrollador Full Stack',
    company: 'Tech Innovators Inc.',
    period: 'Enero 2021 - Presente',
    description: 'Desarrollo de aplicaciones web utilizando React y Django. Implementación de APIs RESTful y optimización de rendimiento.',
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Creative Web Solutions',
    period: 'Junio 2019 - Diciembre 2020',
    description: 'Creación de interfaces de usuario responsivas y accesibles utilizando React y Next.js.',
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-[#f0bf6c] mb-2">{exp.company}</p>
            <p className="text-sm mb-4">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

