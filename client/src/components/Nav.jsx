"use client"
import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { User, Globe, Code, FolderOpen, Briefcase, Mail } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
const navItems = [
  { id: "hero", label: "Inicio", icon: User },
  { id: "about", label: "Acerca", icon: Globe },
  { id: "skills", label: "Habilidades", icon: Code },
  { id: "projects", label: "Proyectos", icon: FolderOpen },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "contact", label: "Contacto", icon: Mail },
]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Id de opcion seleccionado: ", entry.target.id);
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-tertiary/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-primary/10">
        <div className="flex flex-col space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => {scrollToSection(id), console.log("Presionando ", {label}, "con id: ", id)}}
              className={`flex justify-center items-center w-12 h-12 rounded-full transition-all duration-300 group relative ${
                activeSection === id
                  ? "bg-secondary text-primary shadow-md"
                  : "text-primary/60 hover:text-primary hover:bg-secondary/20"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute right-full mr-3 px-2 py-1 bg-primary text-tertiary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* <ThemeToggle /> */}
    </nav>
  )
}