import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Authentication() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
