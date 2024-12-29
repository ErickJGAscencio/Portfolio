import React from 'react'
import { FaGit, FaGithub, FaGoogle, FaLinkedin, FaMailchimp } from 'react-icons/fa'

export default function PersonalInfo() {
  return (
    <section id="informacion-personal"
      className="py-20 flex flex-col items-center justify-center space-y-8 animate-fade-in
      md:flex-row md:space-y-0 md:space-x-12 ">
      <img src="/Foto (1).png" alt="Erick-Ascencio" className="rounded-full shadow-lg" width={350} height={350} />
      <div className="text-center md:text-left animate-slide-up">
        <p className='text-4xl md:text-5xl font-bold'>Soy <span className='text-color_hover_card'>Erick Ascencio</span></p>
        <p className='text-lg md:text-xl'>Desarrollador Fullstack</p>
        <p className="text-[#f0bf6c]">Trabajando con Django y React</p>
        <p className='text-sm md:text-base'>Tabasco, Mexico</p>
        <p className='text-sm md:text-base'>23 años</p>
        <p className='text-sm md:text-base'>No le cuentes a nadie pero,.. soy Spiderman.</p>
        <div className='flex p-1 gap-5'>
          <button><FaGithub /></button>
          <button><FaLinkedin /></button>
          <button><FaGoogle /></button>
        </div>
      </div>
    </section>
  )
}

