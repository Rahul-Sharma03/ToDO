import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const List = (props) => {
  return (
    <div className='list-main'>
      <ul>
           <div className='task'>
            <li className='task'>{props.value}</li>
            <span><MdDelete/></span>
            <span><FaEdit /></span>
        </div>   
        
      </ul>
    </div>
  )
}

export default List