import React from "react";
import Nav from "../components/Nav";
import PersonalInfo from "../components/PersonalInfo";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-tertiary">
      <Nav />
      {/* <main className="container mx-auto px-4 py-8"> */}
      <PersonalInfo />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="py-8 bg-primary text-tertiary">
        <div className="container mx-auto px-4 text-center">
          <p className="animate-fade-in">
            © 2025 Erick Jesús Guzmán Ascencio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      {/* </main> */}
    </div>
  );
}
