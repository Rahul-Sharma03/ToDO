import React, { useState } from 'react'
import Inputs from './Inputs'
const Display = (props) => {
  function status(data){
      props.status(data)
      
  }
  return (
    <div className='display-main'>
      <Inputs status={status}/>  
    </div>
  )
}

export default Display