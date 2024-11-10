import React from 'react'

function Home() {
  const skills = [
    { name: 'Django', imageUrl: '/Django.png' },
    { name: 'Python', imageUrl: '/Python.png' },
    { name: 'REST APIs', imageUrl: '/path/to/restapis.png' },
    { name: 'SQL', imageUrl: '/path/to/sql.png' },
    { name: 'PostgreSQL', imageUrl: '/path/to/postgresql.png' },
    { name: 'React', imageUrl: 'React.png' },
    { name: 'JavaScript', imageUrl: '/Js.png' },
    { name: 'HTML5', imageUrl: '/Html.png' },
    { name: 'CSS3', imageUrl: '/Css.png' },
    { name: 'Tailwind CSS', imageUrl: '/Tailwind.png' },
    { name: 'Git Source Control', imageUrl: '/Git.png' },
    { name: 'Unit Testing', imageUrl: '/path/to/unittesting.png' }
  ]

  const knowledge = ['Django', 'Python', 'REST APIs', 'React', 'JavaScript', 'HTML5', 'CSS3', 'PostgreSQL', 'SQL', 'Git', 'Tailwind CSS', 'Unit Testing',];

  return (
    <div className='text-white flex flex-col bg-color_background min-h-screen'>
      {/* Header */}
      <div className='flex justify-between items-center p-4 md:px-10'>
        <p className='text-sm lg:text-xl font-bold'>Erick Ascencio</p>
        <div className='flex space-x-4 gap-2'>
          <a className='w-auto text-white cursor-pointer hover:underline text-sm lg:text-sm'>About me</a>
          <a className='w-auto text-white cursor-pointer hover:underline text-sm lg:text-sm'>Portfolio</a>
          <a className='w-auto text-white cursor-pointer hover:underline text-sm lg:text-sm'>Contact</a>
        </div>
      </div>

      {/* Personal Info */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 p-10 pt-20 text-center md:text-left'>
        <img className='w-58 md:w-58 md:h-58 rounded-full' src="/Foto (1).png" alt="Descripción" />
        <div className='flex flex-col'>
          <p className='text-4xl md:text-5xl font-bold'>I'm <span className='text-color_hover_card'>Erick Ascencio</span></p>
          <p className='text-lg md:text-xl'>Fullstack Developer</p>
          <p className='text-sm md:text-base'>Tabasco, Mexico</p>
          <p className='text-sm md:text-base'>21 years</p>
          <p className='text-sm md:text-base'>I'm Spiderman, but don't tell anyone.</p>
          <div className='mt-4'>
            <button className='bg-color_card border px-4 py-2 rounded-3xl m-2 hover:color_hover_card text-white'
              onClick={() => window.open('https://www.linkedin.com/in/erick-jes%C3%BAs-guzm%C3%A1n-ascencio-60a068159/')}>
              LinkedIn
            </button>
            <button className='bg-color_card border px-4 py-2 rounded-3xl m-2 hover:color_hover_card text-white'
              onClick={() => window.open('https://www.linkedin.com/in/erick-jes%C3%BAs-guzm%C3%A1n-ascencio-60a068159/')}>
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* About me */}
      <div className='text-white px-10 py-5 
                      lg:px-20'>
        <div className='font-bold text-xl py-5'>About me</div>
        <p className='text-left px-5 max-w-screen-md'>
          Enthusiastic about web development from backend to frontend, handling Django and React to make ideas come true. I like to try new technologies and software development methods.
        </p>
        <button className='w-36 bg-color_card border px-3 py-2 rounded-3xl m-5 hover:bg-color_hover_card text-white'>
          Download CV
        </button>
      </div>

      {/* Skills */}
      <div className='text-white px-10 py-5
                      lg:px-20'>
        <div className='font-bold text-xl py-5'>My Skills</div>
        <div className='px-0 grid grid-cols-2
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4 lg:px-40
                  gap-5
                  justify-center items-center'>
          {skills.map((skill, index) => (
            <div key={index} className='w-32 h-32 bg-color_card hover:bg-color_hover_card rounded-xl p-5 flex flex-col text-center items-center
                                      sm:w-40 sm:h-40'>
              <img src={skill.imageUrl} alt={skill.name} className='w-12 h-12 m-1 lg:m-5'/>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className='px-10 lg:px-20'>
        <div className='font-bold text-xl py-5'>Portfolio</div>
        <div className='rounded-xl border p-5'>
          <p>Workcloud</p>
          <button className='bg-color_card border px-4 py-2 rounded-3xl mt-5 hover:bg-color_hover_card text-white'
            onClick={() => window.open('https://workcloud.onrender.com')}>
            View page
          </button>
        </div>
      </div>

      {/* Experience */}
      <div className='px-10 lg:px-20'>
        <div className='font-bold text-xl py-5'>Experience</div>
      </div>

      {/* Contact me */}
      <div className='px-10 lg:px-20'>
        <div className='font-bold text-xl py-5'>Contact me</div>
      </div>
    </div>
  )
}

export default Home
