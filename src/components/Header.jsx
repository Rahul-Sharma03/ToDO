import React from 'react'


const  date=new Date().toDateString()


const Header = (props) => {
  
  return (
    <div id='header'>
        <div className='date-cont'>
          <h1>{date}</h1>
          <p>{props.status} active tasks</p>
        </div>
        <div className='heading-cont'>
          <h1>TO DO List</h1>
        </div>
      

    </div>
  )
}

export default Header