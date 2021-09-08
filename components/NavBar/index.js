import React from 'react'

const NavBar = ({ children, classList }) => {
  return <nav className={`nav-bar ${classList}`}>{children}</nav>
}

export default NavBar
