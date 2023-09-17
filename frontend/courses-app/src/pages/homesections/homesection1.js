import React from 'react'
import { NavLink } from 'react-router-dom'
import {Icon} from '@iconify/react'



export default function Homesection1() {
  return (
    <div className='homesection1Top'>
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
        <img src={'Courses-test/frontend/courses-app/public/img/2275fa0d8f9388f3dd38f75ab3656d40.jpg'} alt='headerPic'></img>
      </div>
    </div>
  )
}
