import React from 'react'
import { NavLink } from 'react-router-dom'
import {Icon} from '@iconify/react'
import img1 from '../../images/img1.jpg'



export default function Homesection1() {
  return (
    <div className='homesection1'>
      <div className='textSide'>
        <p><span>New</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h1>Find your <span className='courseText'>Course</span> and get certified</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, in?</p>
        <div className='buttonContainer'>
          <NavLink to='courses' className='btn1'>Get Started</NavLink>
          <NavLink className='btn2'> <p>Play video <Icon icon="octicon:play-24" /></p></NavLink>
        </div>
      </div>
      <div className='imgSide'> 
        <img src={img1} alt='headerPic'></img>
      </div>
    </div>
  )
}
