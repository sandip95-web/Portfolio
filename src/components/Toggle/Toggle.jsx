import React, { useContext } from 'react'
import './Toggle.css'
import {BsSun} from 'react-icons/bs'
import {BsMoonStars} from 'react-icons/bs'
import {ThemeContext} from '../../Context'
const Toggle = () => {
  const theme=useContext(ThemeContext)
  const handleClick =()=>{
    theme.dispatch({type:"Toggle"})
  }
  return (
    <>
     <div className="t">
        <BsSun className='t-icon' style={{color:theme.state.darkmode ? 'white' :'#222'}} />
        <BsMoonStars className='t-icon' style={{color:theme.state.darkmode ? '#222' :'white'}} />
        <div className="toggle" onClick={()=>handleClick()} style={{left:theme.state.darkmode ? 0 : 30}}></div>         
     </div>
    </>
  )
}

export default Toggle