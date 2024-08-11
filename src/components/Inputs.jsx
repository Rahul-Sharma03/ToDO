import React, {useState }  from 'react'
import { MdDelete } from "react-icons/md";
const Inputs = (props) => {
  const[name,setname]=useState("")
  const[listdata,setlistdata]=useState([])
  function addtask(){
    let task=document.getElementById("input-value").value
    if(task===""){
      alert("enter value")
    }
    else{
      setlistdata((listdata)=>{
        const updatedlist=[...listdata,name]
        const listdatalength=listdata.length
        props.status(listdatalength+1)
        setname("")
        return updatedlist      
      })
    }
  }
  function remove(i){
    const updatedlist=listdata.filter((elem,id)=>{
      return i!=id;
    })
    setlistdata(updatedlist)
    // props.status(listdatalength+1)
    props.status(updatedlist.length)


  }
  function removeall(){
    setlistdata([])
    // props.status(listdatalength+1)
    props.status(0)
  }
  return (
    <>
    <div className='input-div'>
      <input type="text"  placeholder='enter here' id="input-value" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
      <button onClick={addtask}>Add</button>
      {
        listdata.length!==0 ?(
          <button onClick={removeall}>clear</button>
        ):null
      }
    </div>
    <div className='list-main'>
    {
      listdata.map((data,i)=>{
        return(
          <>
          <ul>
           <div className='task'>
            <li className='task' key={i}>{data}</li>
            <span><MdDelete onClick={()=>remove(i)}/></span>
            {/* <span><FaEdit /></span> */}
        </div>   
        
      </ul>
          </>
        )
      })
    }
    </div>
    </>
  )
}
export default Inputs 