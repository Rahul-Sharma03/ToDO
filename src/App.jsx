import React, { useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
const App = () => {
  const [disp, setDisp] = useState()
  function showstatus(data){
    setDisp(data)
  }
  return (
    <>
    <Header status={disp}/>
    <Display status={showstatus}/>
    </>
    
  )
}

export default App