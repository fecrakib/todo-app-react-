import React from 'react'
import { FiEdit} from "react-icons/fi";
import { AiTwotoneDelete} from "react-icons/ai";
function TaskItem({task}) {
  return (

   <div className="container ">
     <div className='task-item flex justify-between items-center bg-gray-800 rounded hover:bg-gradient-to-r hover:from-teal-600 hover:to-gray-800 p-10 container mx-auto'>
      <div className="task-item-left flex gap-3">
        <input type="checkbox" className='accent-teal-600'/>
        <p className='group-hover:text-teal-400'>{task.text}</p>
      </div>
      <div className="task-item-right flex justify-between gap-3">
     < FiEdit className='text-gray-500 hover:text-teal-500 cursor-pointer duration-300'/>
     <AiTwotoneDelete className='text-gray-500 hover:text-red-500 cursor-pointer duration-300'/>
      </div>
    </div>
   </div>
  )
}

export default TaskItem