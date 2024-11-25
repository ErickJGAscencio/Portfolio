import { FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa"

const projects = [
  {
    name: 'Workcloud',
    description: 'Una plataforma de gestión de proyectos colaborativa.',
    image: 'public/projects-images/Wc1.jpg',
    github: 'https://github.com/ErickJGAscencio/To-Do-List',
    live: 'https://workcloud.onrender.com',
  },
  // {
  //   name: 'HoSeok-eCommerce',
  //   description: 'Tienda en línea para productos de moda coreana.',
  //   image: '/hoseok-ecommerce.jpg',
  //   github: 'https://github.com/tuusuario/hoseok-ecommerce',
  //   live: 'https://hoseok-ecommerce.com',
  // },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={project.name} className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
            {/* <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            /> */}
            <img src={project.image}
              alt={project.name}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank" rel="noopener noreferrer" className="flex items-center text-[#f0bf6c] hover:underline">
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank" rel="noopener noreferrer" className="flex items-center text-[#f0bf6c] hover:underline">
                  <FaRegArrowAltCircleRight className="w-4 h-4 mr-2" />
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

