import React from 'react'
import {Link}from 'react-router-dom'
import Home from './Home'

function Header() {
  return (
  <div>
    <nav>
    <Link to="/"> Home </Link>
    </nav>
  </div>

  )
}

export default Header