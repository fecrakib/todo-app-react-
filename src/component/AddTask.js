import React, { useRef, useState } from 'react'

function AddTask() {
  const [task,setTask]=useState('')
  const inputRef=useRef(null)
  // add task handle event
  const addTaskHandler=(e)=>{
    e.preventDefault()
    // post task into server
    taskPosting(task)
    inputRef.current.blur();
    setTask('')
  }
  // task posting
  const taskPosting=async(text)=>{
const res=await fetch('https://aluminum-delicate-snowshoe.glitch.me/tasks',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify({text})
})
  }
  return (
   <form action="" className='bg-gray-900 mx-auto flex justify-between container 'onSubmit={addTaskHandler}>
    <input 
    ref={inputRef}
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    required type="text" placeholder='what things to do' className='bg-transparent outline-none border-b-2 py-2  px-5 focus:border-teal-600 border-gray-400'/>
    <button className='px-5 bg-teal-900 py-2 rounded-sm mt-5 border-2 border-teal-200 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add task</button>
   </form>
  )
}


export default AddTask