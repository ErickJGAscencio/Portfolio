import React from 'react'

function Home() {
  const pro = ['Django', 'Python', 'REST APIs', 'React', 'JavaScript', 'HTML5', 'CSS3', 'PostgreSQL', 'SQL', 'Git', 'Tailwind CSS', 'Unit Testing',];

  return (
    <div className='flex-col'>
      <div className='bg-color_header text-xl font-bold pl-10 p-2 text-white'>Erick Ascencio</div>
      <div className='flex-col text-center'>
        {/* Personal Info */}
        <div className='bg-color_body flex justify-center items-center gap-8 p-5'>
          <img
            className='w-48 rounded-full border'
            src="https://erickjgascencio.github.io/Mi_Pagina/Imagenes/Foto.png" alt="" />
          <div className='flex-col text-left'>
            <p className='text-xl font-bold'>Erick Jesús Guzmán Ascencio</p>
            <p className='text-sm'>FullStack Developer</p>
            <p className='text-sm'>Tabasco, Mexico</p>
            <p className='text-sm'>21 years</p>
            <p className='text-sm'>I'm Spiderman, but don´t tell anyone.</p>
          </div>
          <button className='bg-color_header pl-3 pr-3 p-2 rounded-3xl m-5 hover:bg-color_border text-white'
              onClick={() => window.open('https://www.linkedin.com/in/erick-jes%C3%BAs-guzm%C3%A1n-ascencio-60a068159/')}>
              LinkedIn
            </button>
        </div>
        {/* Abour me */}
        <div>
          <div className='font-bold text-xl p-5'>About me</div>
          <p>Enthusiastic about web development from backend to frontend, handling Django and React to make ideas come true</p>
          <p>I like to try new technologies and software development methods.</p>
          <button className='bg-color_header pl-3 pr-3 p-2 rounded-3xl m-5 hover:bg-color_border text-white'>Dowload CV</button>
        </div>
        {/* Skills */}
        <div>
          <div className='font-bold text-xl p-5'>Skills</div>
        </div>
        {/* Knowledge */}
        <div className='bg-gray-100 p-5'>
          <div className='font-bold text-xl p-5'>Knowledge</div>
          <div className='flex justify-center gap-5'>
            {pro.map((item, index) => (
              <p className='rounded-xl border pl-3 pr-3' key={index}>{item}</p>
            ))}
          </div>
        </div>
        {/* Project */}
        <div className='p-5'>
          <div className='font-bold text-xl p-5'>Projects</div>
          <div className='rounded-xl border pl-3 pr-3'>
            <p>Workcloud</p>
            <button className='bg-color_header pl-3 pr-3 p-2 rounded-3xl m-5 hover:bg-color_border text-white'
              onClick={() => window.open('https://workcloud.onrender.com')}>
              View page
            </button>
          </div>
        </div>

      </div>
      <div className='flex-col bg-color_footer text-white text-center p-5'>
        <h4 className='text-xl font-bold'>Contact</h4>
        <p>Email: erickjesus.guzmanascencio@gmail.com</p>
        <p>Phone: +52 99-31-99-60-39</p>
      </div>
    </div>
  )
}

export default Home