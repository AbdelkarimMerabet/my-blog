import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <h1>Life Blog</h1>
        <div className='links'>
          <ul>
            <li>
              <a href='/'>
                Home 
              </a>
            </li>
            <li>
              <a href='/create' className='bt'>
               New Post
              </a>
            </li>
          </ul> 
        </div>
      </nav>
    </header>
  )
}

export default Header