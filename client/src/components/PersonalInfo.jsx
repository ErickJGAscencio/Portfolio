import React from 'react'

export default function PersonalInfo() {
  return (
    <section id="informacion-personal" className="py-20 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 animate-fade-in">
      {/* <Image
        src="/Foto (1).png"
        alt="Tu Nombre"
        width={250}
        height={250}
        className="rounded-full shadow-lg"
      /> */}
      <img src="/Foto (1).png" alt="Erick-Ascencio" className="rounded-full shadow-lg" width={350} height={350} />
      <div className="text-center md:text-left animate-slide-up">
        <p className='text-4xl md:text-5xl font-bold'>I'm <span className='text-color_hover_card'>Erick Ascencio</span></p>
        <p className='text-lg md:text-xl'>Fullstack Developer</p>
        <p className="text-[#f0bf6c]">Especializado en Django y React</p>
        <p className='text-sm md:text-base'>Tabasco, Mexico</p>
        <p className='text-sm md:text-base'>23 years</p>
        <p className='text-sm md:text-base'>I'm Spiderman, but don't tell anyone.</p>
      </div>
    </section>
  )
}

