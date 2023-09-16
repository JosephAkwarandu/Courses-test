import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <div>

      <nav>
        <h1>Coursemine</h1>
        <navbar>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="courses" >
            <button>Courses</button>
          </NavLink>
          <NavLink to="contact" >
            <button>Contact</button>
          </NavLink>
          <NavLink to="about" >
            <button>About</button>
          </NavLink>
          <NavLink to="auth" >
            <button>Signup</button>
          </NavLink>
        </navbar>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer></footer>

    </div>
  )
}
