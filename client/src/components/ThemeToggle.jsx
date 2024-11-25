'use client'

import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
// import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
      aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {darkMode ? <FaSun className="w-5 h-5"/> : <FaMoon className="w-5 h-5" />}
    </button>
  )
}

