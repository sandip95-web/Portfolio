import React, { useRef, useState } from 'react'
import './Contact.css'
import { BsTelephoneMinus } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressCard } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formref=useRef();
    const[done,setDone]=useState(false);
    const submitForm=(e)=>{
      e.preventDefault();

      emailjs.sendForm('service_no12m45', 'template_cfydpxj', formref.current, '7UiZAzwf4_tpS55pe')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
   <>
     <div className="c">
         <div className="c-bg"></div>
         <div className="c-main">
         <div className="c-left">
             <h1 className="c-title">Let's discuss your project</h1>
               <div className="c-info">
                   <div className="c-item">
                       <BsTelephoneMinus className='c-icon'/> 9818504980
                   </div>
                   <div className="c-item">
                       <HiOutlineMail className='c-icon' />sandeep@academiacollege.edu.np
                   </div>
                   <div className="c-item">
                       <FaRegAddressCard className='c-icon'/>Jawalakhel, Lalitpur
                   </div>
               </div>
         </div>
         <div className="c-right">
             <div className="c-des">
                 <p><span>What's your story?</span> Get in touch. Always available for freelancing if the right project comes along me.</p>
             </div>
             <form ref={formref} onSubmit={submitForm}>
                 <input type="text" placeholder='Name' name='user_name' />
                 <input type="text" placeholder='Subject' name='user_subject' />
                 <input type="email" placeholder='Email' name='user_email' />
                 <textarea rows="10" placeholder='Message' name='message'></textarea>
                 <button>Submit</button>
                 {done && <h1 className='last'>Thank You...</h1>}
             </form>
         </div>
     </div>
     </div>
     
   </>
  )
}

export default Contact