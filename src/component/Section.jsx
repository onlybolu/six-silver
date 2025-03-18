import React from 'react'
import "./section.css"
const Section = () => {
  return (
    <div className='section d-none d-md-flex justify-content-center'>  
      <div className="secleft d-none d-md-flex">
        <img src="exclusive.png" alt="" />
      </div>
      <div className="secright">
        <div className="min">
        <p>Season's Greetings From LA!</p>
        </div>
        <h1>TO YOU, FOR YOU</h1>
        <div className="min1">
            <a href="/">Explore Now  </a>
        </div>
     </div>
    </div>
  )
}

export default Section
