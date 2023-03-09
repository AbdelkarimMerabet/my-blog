import React from 'react'
import Posts from './Posts/Posts'

const Home = () => {
  const titre ='Home'
  const handleClick=(e)=>{
    console.log("karim");
    console.log(e)
  }
  return (
    <div className='Home'>
        <div className='Container'>
          <button className='bt' onClick={handleClick}>
            Click Me
          </button>
          <h1>
            {titre}
          </h1>
          <Posts/>
        </div>
        
    </div>
  )
}

export default Home