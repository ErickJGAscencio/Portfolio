const experiences = [
  {
    title: 'Desarrollado Full Stack',
    company: 'AleHoSeaokStore E-Commerce.',
    period: 'November 20023 - Presente',
    description: 'Desarrollo de un e-commerce web utilizando React y Django. Implementación de APIs RESTful y optimización de rendimiento.',
    tech: [
      'Python',
      'Django',
      'ReactJs',
    ],
    url: 'https://www.google.com',
    urlGit: ''
  },
  // {
  //   title: 'Desarrollador Frontend',
  //   company: 'Creative Web Solutions',
  //   period: 'Junio 2019 - Diciembre 2020',
  //   description: 'Creación de interfaces de usuario responsivas y accesibles utilizando React y Next.js.',
  //   tech: [
  //     'Python',
  //     'Django',
  //   ],
  //   url: 'google.com',
  //   urlGit: 'github.com'
  // },
];

const colors = {
  Python: '#FFDD55',
  Django: '#226D1A',
  ReactJs: '#88F4EE'
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-[#f0bf6c] mb-2">{exp.company}</p>
            <p className="text-sm mb-4">{exp.period}</p>
            <p>{exp.description}</p>
            <div className="flex gap-5">
              {exp.tech.map((tech, techIndex) => (
                <p className="py-1 px-3 rounded-full bg-gray-800" key={techIndex}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex mt-5 gap-5">
              <button href={exp.tech.url} className="underline cursor-pointer hover:font-bold">See project</button>
              {exp.tech.urlGit !== "" && (
                <button href={exp.tech.urlGit} className="underline cursor-pointer hover:font-bold">See GitHub</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
