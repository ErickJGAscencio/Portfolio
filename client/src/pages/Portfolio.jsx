import React from 'react'
import Header from '../components/Header'
import PersonalInfo from '../components/PersonalInfo'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PersonalInfo />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
