import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <HomePage />
    <Portfolio />
  )
}

export default App