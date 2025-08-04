import React from "react";
import { FolderOpen, Mail, ChevronDown } from "lucide-react";

export default function PersonalInfo() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 animate-float">
            <img
              src="/Foto (1).png"
              alt="Erick-Ascencio"
              width={200}
              height={200}
              className="rounded-full border-4 border-secondary mx-auto shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animated-slide-up">
            Erick Jesús
            <span className="text-secondary block animate-slide-in-right">
              Guzmán Ascencio
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-primary/70 mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Desarrollador Web y Móvil
          </p>
          <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                size="lg"
                className="bg-secondary text-primary flex px-4 w-40 justify-center rounded-full py-1 hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                <FolderOpen className="w-5 h-5 mr-2" />
                Ver Proyectos
              </button>
              <button
                variant="outline"
                size="lg"
                className="bg-secondary text-primary flex px-4 w-40 justify-center rounded-full py-1 hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactar
              </button>
            </div>
        </div>
      </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-secondary cursor-pointer" onClick={() => scrollToSection("about")} />
        </div>
      </section>
  );
}
