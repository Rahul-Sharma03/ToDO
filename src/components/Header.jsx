import React from 'react'
import { IoIosSettings } from "react-icons/io";

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
        <div className='icon-cont'>
          <IoIosSettings />
        </div>

    </div>
  )
}

export default Header