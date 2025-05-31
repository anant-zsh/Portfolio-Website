import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <div className='resume-call'>
            <div>Resume</div>
        </div>
        <div className='logo'>
          Logo
        </div>
        <div>
          <ol className='nav-list'>
            <li>☀️</li>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ol>
        </div>
      </nav>
    </div>
  )
}

export default Header
