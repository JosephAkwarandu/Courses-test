import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <div className='template'>

      <nav>
        <h1>Coursemine</h1>
        <navbar className='navbar'>
          <NavLink exact activeclassName='homeLink' to="/">
            Home
          </NavLink>
          <NavLink activeclassName='courseLink' to="courses" >
            Courses
          </NavLink>
          <NavLink activeclassName='contactLink' to="contact" >
            Contact
          </NavLink>
          <NavLink activeclassName='aboutLink' to="about" >
            About
          </NavLink>
          <NavLink activeclassName='authLink' to="auth" >
            Signup
          </NavLink>
        </navbar>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <div>hello man</div>
      </footer>

    </div>
  )
}
