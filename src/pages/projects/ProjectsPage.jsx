import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function ProjectsPage() {
  return (
    <div>
        <h2>Projects Catalog</h2>
          <div>
            <Link to="/houses" >Houses</Link>
            <Link to="/duplexes" >Duplex</Link>
          </div>
    </div>
  )
  }