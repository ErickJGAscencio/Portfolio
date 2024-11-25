import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground sticky top-0 z-10 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Erick Ascencio</h1>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            {['Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
              <li key={item}>
                {/* <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#f0bf6c] transition-colors"> */}
                  {item}
                {/* </Link> */}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}