import React from 'react'

function Home() {
  return (
    <div className='flex-col'>
      <div className='bg-color_header'>header</div>
      <div className='bg-color_body'>
        <div>
          Personal info
        </div>
        <div>
          About me
        </div>
        <div>
          Skills
        </div>
        <div>
          Knowledge
        </div>
        <div>
          Projects
        </div>
      </div>
      <div className='flex-col bg-color_footer text-white'>
        <h4>Contact</h4>
        <p>Email: erickjesus.guzmanascencio@gmail.com</p>
        <p>Phone: +52 99-31-99-60-39</p>
      </div>
    </div>
  )
}

export default Home