import { Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutMe() {
  const [rotated, setRotated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about") // <- corregido
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        setRotated(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Acerca de Mí
              <div className="w-24 h-1 bg-secondary mx-auto mt-2"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto descriptivo */}
            <div className="animate-slide-in-left">
              <p className="text-lg text-primary/80 leading-relaxed mb-6">
                ¡Hola! Soy Erick Jesús Guzmán Ascencio, ingeniero en Sistemas Computacionales. Soy un desarrollador con
                pasión por crear soluciones prácticas y funcionales. Tengo experiencia en desarrollo web y móvil,
                utilizando tecnologías como React, Django y React Native para construir aplicaciones sólidas y escalables.
              </p>
              <p className="text-lg text-primary/80 leading-relaxed mb-6">
                Me especializo en crear soluciones digitales innovadoras que combinan funcionalidad excepcional con diseños
                atractivos y experiencias de usuario intuitivas. Escribo código limpio, mantenible y disfruto colaborar con
                equipos multidisciplinarios.
              </p>
              <p className="text-lg text-primary/80 leading-relaxed mb-6">
                Siempre busco mejorar mis habilidades técnicas y de diseño explorando nuevas metodologías, herramientas y
                frameworks.
              </p>

              <div className="flex flex-wrap gap-4">
                <InfoItem icon={MapPin} text="Villahermosa Tabasco, México" />
                <InfoItem icon={Calendar} text="+2 años de experiencia" />
              </div>
            </div>

            {/* Estadísticas y tarjetas */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard label="Proyectos Completados" />
                <StatCard label="Tecnologías Dominadas" />
                <StatCard label="Satisfacción del Cliente" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 🧩 Subcomponentes

function InfoItem({ icon: Icon, text }){
  return (
    <div className="flex items-center space-x-2">
      <Icon className="w-5 h-5 text-secondary" />
      <span className="text-primary">{text}</span>
    </div>
  )
}

function StatCard({ label }) {
  return (
    <Card className="text-center p-6 border-primary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-0">
        {/* Puedes insertar <AnimatedCounter /> aquí */}
        <div className="text-3xl font-bold text-secondary mb-2"></div>
        <div className="text-sm text-primary/70">{label}</div>
      </CardContent>
    </Card>
  )
}

function Card({ children, className = "" }) {
  return <div className={`rounded-lg bg-tertiary shadow-lg ${className}`}>{children}</div>
}

function CardContent({ children, className = ""}) {
  return <div className={`text-primary ${className}`}>{children}</div>
}
