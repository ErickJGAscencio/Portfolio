import { Award, Zap } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador Móvil - En la actualidad",
    company:
      "Coordinación de Modernización Administrativa e Innovación Gubernamental (CGMAIG)",
    period: "May-25 / ~",
    description:
      "Trabajé en el desarrollo de aplicaciones móviles para el estado de Tabasco, principalmente en ABIM Tabasco, una aplicación para mantener un registro de los bienes muebles de las dependencias gubernamentales. Además de presentar una propuesta visual nueva para la nueva interfaz actualmente utilizada.",
    tech: ["React Native", "Node Js"],
    achievements: [
      "Diseñé e implementé una interfaz móvil moderna más intuitiva para ABIM Tabasco",
      // "Integré funcionalidades de registro y consulta de bienes en tiempo real vía API segura",
      "Aseguré compatibilidad y estabilidad en múltiples versiones de Android",
      "Propuse mejoras visuales que fueron adoptadas como base para la versión oficial",
      "Brindé soporte técnico post-despliegue y seguimiento de uso institucional",
    ],
  },
  {
    title: "Desarrollador Backend",
    company: "Universidad Juárez Autónoma de Tabasco",
    period: "Nov-23 / Abr-24",
    description:
      "Colaboré en el desarrollo y mantenimiento de sitios web con herramientas modernas y APIs. Implementé adaptaciones en PHP, perfeccioné sistemas de API con Postman y optimicé la escalabilidad y seguridad del sistema.",
    tech: ["PHP"],
    achievements: [
      "Adapté módulos PHP legados para cumplir con nuevas políticas de escalabilidad",
      "Documenté flujos de API en Postman y facilité pruebas automatizadas para QA",
      // "Reduje tiempos de carga en sistemas web mediante refactorización estratégica",
      "Mejoré seguridad en endpoints con control de acceso y sanitización de entradas",
      // "Colaboré en tareas de mantenimiento preventivo y migración gradual de dependencias",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Header />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-secondary/30" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Experiencia Profesional
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto mb-4" />
      <p className="text-lg text-primary/70">Mi trayectoria profesional</p>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const isLeft = index % 2 !== 0;

  return (
    <div
      className={`relative animate-slide-up ${
        isLeft ? "md:text-left md:pl-8" : "md:text-right md:pr-8"
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-tertiary shadow-lg animate-pulse-slow" />

      <Card
        className={`ml-12 md:ml-0 border-primary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
          isLeft ? "md:ml-8" : "md:mr-8"
        }`}
      >
        <CardHeader>
          <CardTitle>{exp.title}</CardTitle>
          <CardDescription>{exp.company}</CardDescription>
          <Badge>{exp.period}</Badge>
        </CardHeader>

        <CardContent>
          <p className="text-primary/80 mb-4">{exp.description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold text-primary flex items-center">
              <Award className="w-4 h-4 mr-2 text-secondary" />
              Logros principales
            </h4>
            <ul className="list-disc list-inside space-y-1 text-primary/70">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Zap className="w-3 h-3 mr-2 mt-1 text-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Componentes base
export function Card({ children, className }) {
  return <div className={`rounded-lg shadow-lg p-4 bg-tertiary ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-primary">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-semibold text-primary">{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="text-lg text-secondary">{children}</p>;
}

export function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1 border-2 border-secondary text-primary rounded-full text-sm font-medium shadow hover:scale-105 transition-all duration-300 mt-2">
      {children}
    </div>
  );
}
