import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <div className='template'>

      <nav>
        <h1>Coursemine</h1>
        <navbar className='navbar'>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="courses" >
            Courses
          </NavLink>
          <NavLink to="contact" >
            Contact
          </NavLink>
          <NavLink to="about" >
            About
          </NavLink>
          <NavLink to="auth" >
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
