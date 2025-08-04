import {
  Award,
  Calendar,
  Download,
  Mail,
  MapPin,
  Phone,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify you are not a robot.");
      return;
    } // Lógica para enviar el formulario

    console.log("Formulario enviado:", { email, message });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              ¡Trabajemos Juntos!
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-primary/70">
              ¿Tienes un proyecto en mente? Me encantaría escucharte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-primary/10 animate-slide-in-left hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Información de Contacto
                </CardTitle>
                <CardDescription>Ponte en contacto conmigo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-primary/70">
                      erickjesus.guzmanascencio@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Teléfono</h4>
                    <p className="text-primary/70">+52 99 31 99 60 39</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Ubicación</h4>
                    <p className="text-primary/70">Nacajuca, Tabasco, México</p>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <button className="flex w-full py-2 justify-center border-2 border-secondary rounded items-center text-primary bg-secondary transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </button>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/ErickJGAscencio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full py-2 justify-center items-center bg-white text-secondary border-2 border-secondary rounded hover:bg-secondary hover:text-primary transform hover:scale-105 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/erick-jes%C3%BAs-guzm%C3%A1n-ascencio-60a068159/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full py-2 justify-center items-center bg-white text-secondary border-2 border-secondary rounded hover:bg-secondary hover:text-primary transform hover:scale-105 transition-all duration-300"
                    >
                      <FaLinkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/10 animate-slide-in-right hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">
                  ¿Por qué trabajar conmigo?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Experiencia Comprobada",
                      description: "2+ años desarrollando soluciones exitosas",
                      icon: Award,
                    },
                    {
                      title: "Comunicación Clara",
                      description:
                        "Actualizaciones constantes y transparencia total",
                      icon: User,
                    },
                    {
                      title: "Entrega a Tiempo",
                      description:
                        "Cumplimiento de plazos y calidad garantizada",
                      icon: Calendar,
                    },
                    {
                      title: "Soporte Continuo",
                      description:
                        "Mantenimiento y actualizaciones post-entrega",
                      icon: Zap,
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300 transform hover:translate-x-2 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/Curriculum -Erick Jesús Guzmán Ascencio.pdf"
                  download
                  className="w-full flex items-center justify-center py-2 border-2 border-secondary rounded text-secondary bg-white hover:bg-secondary hover:text-primary transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Card({ children }) {
  return <div className="rounded-lg shadow-lg p-4 bg-tertiary">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-primary">{children}</div>;
}

export function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1 border-2 border-secondary text-primary rounded-full text-sm font-medium shadow hover:scale-105 transition-all duration-300">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div>{children}</div>;
}

export function CardTitle({ children }) {
  return <div>{children}</div>;
}

export function CardDescription({ children }) {
  return <div>{children}</div>;
}

// import {
//   Award,
//   Calendar,
//   Download,
//   Mail,
//   MapPin,
//   Phone,
//   User,
//   Zap,
// } from "lucide-react"
// import { useState } from "react"
// import ReCAPTCHA from "react-google-recaptcha"
// import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa"

// export default function Contact() {
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")
//   const [captcha, setCaptcha] = useState(null)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!captcha) {
//       alert("Por favor, verifica que no eres un robot.")
//       return
//     }
//     console.log("Formulario enviado:", { email, message })
//   }

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">¡Trabajemos Juntos!</h2>
//             <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
//             <p className="text-lg text-primary/70">¿Tienes un proyecto en mente? Me encantaría escucharte</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Panel de información */}
//             <Card className="border-primary/10 animate-slide-in-left hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <CardTitle>Información de Contacto</CardTitle>
//                 <CardDescription>Ponte en contacto conmigo</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <ContactItem icon={Mail} label="Email" value="erickjesus.guzmanascencio@gmail.com" />
//                 <ContactItem icon={Phone} label="Teléfono" value="+52 55 1234 5678" />
//                 <ContactItem icon={MapPin} label="Ubicación" value="Nacajuca, Tabasco, México" />

//                 <div className="flex space-x-4 pt-2">
//                   <SocialIcon icon={FaGithub} link="https://github.com/ErickAscencio" />
//                   <SocialIcon icon={FaLinkedin} link="https://linkedin.com/in/erickascencio" />
//                   <SocialIcon icon={FaAt} link="mailto:erickjesus.guzmanascencio@gmail.com" />
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Formulario */}
//             <Card className="border-primary/10 animate-slide-in-right">
//               <CardHeader>
//                 <CardTitle>Formulario de Contacto</CardTitle>
//                 <CardDescription>Envía tu mensaje directamente</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <input
//                     type="email"
//                     placeholder="Tu correo"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-3 border rounded bg-tertiary text-primary/80"
//                     required
//                   />
//                   <textarea
//                     placeholder="Tu mensaje"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="w-full p-3 border rounded bg-tertiary text-primary/80"
//                     rows={6}
//                     required
//                   />
//                   <ReCAPTCHA
//                     sitekey="TU_CLAVE_DE_RECAPTCHA"
//                     onChange={setCaptcha}
//                   />
//                   <button
//                     type="submit"
//                     className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary/80 transition-colors"
//                   >
//                     Enviar mensaje
//                   </button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Card({ children, className = "" }) {
//   return <div className={`rounded-lg bg-tertiary shadow-md p-6 ${className}`}>{children}</div>
// }

// function CardHeader({ children }) {
//   return <div className="mb-4">{children}</div>
// }

// function CardTitle({ children }) {
//   return <h3 className="text-xl font-semibold text-primary mb-1">{children}</h3>
// }

// function CardDescription({ children }) {
//   return <p className="text-primary/60 text-sm">{children}</p>
// }

// function CardContent({ children, className = "" }) {
//   return <div className={`text-primary ${className}`}>{children}</div>
// }

// function ContactItem({ icon: Icon, label, value }) {
//   return (
//     <div className="flex items-center space-x-4">
//       <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
//         <Icon className="w-6 h-6 text-secondary" />
//       </div>
//       <div>
//         <h4 className="font-semibold text-primary">{label}</h4>
//         <p className="text-primary/70">{value}</p>
//       </div>
//     </div>
//   )
// }

// function SocialIcon({ icon: Icon, link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-secondary hover:text-primary transition-colors"
//     >
//       <Icon className="w-6 h-6" />
//     </a>
//   )
// }
