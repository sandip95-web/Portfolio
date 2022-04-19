import React from 'react'
import './About.css'
import self1 from '../image/self1.jpg'
import laugh from '../image/laugh.jpg'
const About = () => {
  return (
    <>
      <div className="a-main">
          <div className="a-left">
             <div className="a-card bg">
                
             </div>
             <div className="a-card">
                  <img src={self1} className="a-img" alt="" />
             </div>
          </div>
          <div className="a-right">
              <div className="a-info">
                  <h1 className="a-title">About Me</h1>
                  <p className="a-body">
                     I am A CSIT student currently studing in my bachelor Level. I have a lots of hobbies and singing is one of them.I love all kinds of food and in terms Of fruits i hate papaya.I am enjoying web development and i am looking forward to working with lots of people to enhance my idea and knowledge.
                   <div className="emo">
                   <img src={laugh} className="emo-img" alt="" />
                   </div>
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}

export default About