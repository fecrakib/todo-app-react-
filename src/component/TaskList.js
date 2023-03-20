import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks}) {
  return (
    <div className='flex flex-col container mx-auto gap-3 bg-gray-900 p-10 '>
{
  tasks.map(task=> <TaskItem task={task} key={task.id}/>)
}
    
    </div>
  )
}

export default TaskList