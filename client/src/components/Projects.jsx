import { FaGithub, FaOutdent, FaStarHalfAlt, FaWeebly } from "react-icons/fa";

const projects = [
  {
    title: "Workcloud",
    description:
      "Una plataforma para la gestión de proyectos personales o en grupo, adaptable a diferentes dispositivos.",
    technologies: ["Python", "Django", "React", "JavaScript"],
    image: "/projects-images/Wc1.jpg",
    link: "https://github.com/ErickJGAscencio/To-Do-List",
    live: "https://workcloud.onrender.com",
    featured: true,
  },
  {
    title: "E-commerce Mobile App",
    description:
      "Aplicación móvil completa de comercio electrónico desarrollada con React Native. Lorum Impsum",
    technologies: ["React Native", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/ErickJGAscencio/ecommerce-mobile",
    live: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-l from-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <HeaderSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeaderSection() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Proyectos Destacados
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
      <p className="text-lg text-primary/70">
        Algunos de mis trabajos más recientes
      </p>
    </div>
  );
}

function CardProject({ project, index }) {
  return (
    <Card
      className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-slide-up ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge>
              <FaStarHalfAlt className="w-4 h-4 mr-1 " />
              Destacado
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col justify-evenly">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 my-4">
            {project.technologies.map((tech) => (
              <BadgeTech key={tech}>{tech}</BadgeTech>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-primary rounded-full text-xs font-medium shadow hover:scale-105 transition-transform duration-300"
              >
                <FaGithub className="w-4 h-4" />
                Ver en GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1 border border-secondary text-secondary rounded-full text-xs font-medium shadow hover:bg-secondary hover:text-primary transition-colors duration-300"
              >
                <FaOutdent/>
                Ver en la Web
              </a>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export function Card({ children, className, style }) {
  return (
    <div
      className={`rounded-lg shadow-lg p-4 bg-tertiary ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
      {children}
    </h3>
  );
}

export function CardDescription({ children }) {
  return <p className="text-primary/80 text-sm">{children}</p>;
}

export function CardContent({ children }) {
  return <div className="text-primary">{children}</div>;
}

export function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-full text-xs font-medium shadow hover:scale-105 transition-transform duration-300">
      {children}
    </div>
  );
}

export function BadgeTech({ children }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-0.5 border border-secondary text-secondary rounded-full text-xs font-medium shadow-sm hover:scale-105 transition-transform duration-300">
      {children}
    </span>
  );
}
