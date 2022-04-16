import React from 'react'
import './Info.css'
import Me from '../image/pp.jpg'
const info = () => {
  return (
    <header>
        <div className="h-main">
            <div className="h-left">
               <div className="h-greeting">
                   <h2 className="greeting">Hello, My Name is</h2>
                   <h1 className='h-name'>Sandeep Maharjan</h1>
               </div>
              <div className="h-list">
              <div className="h-list-wrapper">
                  <li>Web Developer</li>
                  <li>Gamer</li>
                  <li>Singer</li>
                  <li>Content-Creator</li>
                </div>
              </div>
                <div className="h-info">
                 <p className="info">
                     Hello Everyone,  I Design Website of all kind for The Customer. Please Contact me for any further information. I would Love to work with you guys and Share Our Ideas together in Our Project.
                 </p>
                </div> 
            </div>
            <div className="h-right">
                       <div className='h-img'>
                           <img src={Me} alt="cartoon character" />
                       </div>
            </div>
        </div>
    </header>
  )
}

export default info