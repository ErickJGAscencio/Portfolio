import { Braces, Cloud, Code, Code2, Container, Database, FileCode, Flame, GitBranch, Globe, HardDrive, Layers, Package, Paintbrush, Palette, Rocket, Send, Server, Smartphone, Wind, Zap } from "lucide-react";
import React from "react";
import {
  FaFigma,
  FaPython
} from "react-icons/fa";


export default function Skills() {
  return <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Habilidades Técnicas</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
              <p className="text-lg text-primary/70">Tecnologías y herramientas que domino</p>
            </div>

            {/* Frontend Skills */}
            <div className="mb-16 animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "React", icon: "Code2", level: "Intermedio", color: "from-blue-400 to-blue-600" },
                  { name: "Next.js", icon: "Zap", level: "Junior", color: "from-gray-700 to-black" },
                  { name: "TypeScript", icon: "FileCode", level: "Intermedio", color: "from-blue-500 to-blue-700" },
                  { name: "JavaScript", icon: "Braces", level: "Intermedio", color: "from-yellow-400 to-yellow-600" },
                  { name: "HTML5", icon: "Globe", level: "Intermedio", color: "from-orange-400 to-orange-600" },
                  { name: "CSS3", icon: "Palette", level: "Intermedio", color: "from-blue-400 to-blue-600" },
                  { name: "Tailwind", icon: "Wind", level: "Intermedio", color: "from-teal-400 to-teal-600" },
                  { name: "Sass", icon: "Paintbrush", level: "Intermedio", color: "from-pink-400 to-pink-600" },
                ].map((skill, index) => {
                  const IconComponent = {
                    Code2: Code2,
                    Zap: Zap,
                    FileCode: FileCode,
                    Braces: Braces,
                    Globe: Globe,
                    Palette: Palette,
                    Wind: Wind,
                    Paintbrush: Paintbrush,
                  }[skill.icon]

                  return (
                    <div
                      key={skill.name}
                      className="group relative bg-tertiary rounded-xl p-6 border border-primary/10 hover:border-secondary/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                      />

                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <div className="text-xs text-primary/60 mb-3">{skill.level}</div>
                        <div className="w-full bg-primary/10 rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Mobile Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "React Native",
                    icon: "Smartphone",
                    description: "Desarrollo de apps nativas multiplataforma",
                    projects: "3+ apps",
                    color: "from-blue-500 to-purple-600",
                  },
                  {
                    name: "Flutter",
                    icon: "Layers",
                    description: "Framework de Google para apps móviles",
                    projects: "2+ apps",
                    color: "from-blue-400 to-cyan-500",
                  },
                ].map((skill, index) => {
                  const IconComponent = skill.icon === "Smartphone" ? Smartphone : Layers

                  return (
                    <div
                      key={skill.name}
                      className="group relative bg-tertiary rounded-2xl p-8 border border-primary/10 hover:border-secondary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 mr-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-secondary" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <div className="text-sm text-secondary font-medium">{skill.projects}</div>
                          </div>
                        </div>
                        <p className="text-primary/70 group-hover:text-primary transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Backend & Database */}
            <div className="mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Backend & Database</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Node.js", icon: "Server", specialty: "Runtime" },
                  { name: "Express.js", icon: "Rocket", specialty: "Framework" },
                  { name: "Python", icon: "Python", specialty: "Lenguage" },
                  { name: "Django", icon: "Django", specialty: "Framework" },
                  { name: "MongoDB", icon: "Database", specialty: "NoSQL" },
                  { name: "PostgreSQL", icon: "HardDrive", specialty: "SQL" },
                ].map((skill, index) => {
                  const IconComponent = {
                    Server: Server,
                    Rocket: Rocket,
                    Database: Database,
                    HardDrive: HardDrive,
                    Python: FaPython,
                    Django: FaPython,
                  }[skill.icon]

                  return (
                    <div
                      key={skill.name}
                      className="group relative bg-tertiary rounded-xl p-6 border border-primary/10 hover:border-secondary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl animate-slide-up"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="text-center">
                        <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-secondary" />
                        </div>
                        <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <div className="text-xs text-primary/60">{skill.specialty}</div>
                      </div>

                      <div className="absolute inset-0 bg-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Herramientas & Otros</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Git", icon: "GitBranch" },
                  // { name: "Docker", icon: "Container" },
                  // { name: "AWS", icon: "Cloud" },
                  { name: "Firebase", icon: "Flame" },
                  { name: "Figma", icon: "Figma" },
                  { name: "VS Code", icon: "Code" },
                  { name: "Postman", icon: "Send" },
                  // { name: "Webpack", icon: "Package" },
                ].map((tool, index) => {
                  const IconComponent = {
                    GitBranch: GitBranch,
                    Container: Container,
                    Cloud: Cloud,
                    Flame: Flame,
                    Figma: FaFigma,
                    Code: Code,
                    Send: Send,
                    Package: Package,
                  }[tool.icon]

                  return (
                    <div
                      key={tool.name}
                      className="group flex items-center space-x-3 bg-tertiary rounded-full px-6 py-3 border border-primary/10 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300">
                        <IconComponent className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                        {tool.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Resumen de Experiencia</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {/* <AnimatedCounter end={5} suffix="+" /> */}
                    </div>
                    <div className="text-primary/70">Años de Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {/* <AnimatedCounter end={15} suffix="+" /> */}
                    </div>
                    <div className="text-primary/70">Tecnologías Dominadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {/* <AnimatedCounter end={50} suffix="+" /> */}
                    </div>
                    <div className="text-primary/70">Proyectos Completados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
}
