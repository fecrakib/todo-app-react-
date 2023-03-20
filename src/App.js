import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Fotter from './component/Fotter';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
const App = () => {
const [tasks,setTask]=useState([])
useEffect(()=>{
// fetchingData from the server
feacthingData()
},[])
// fetfching data
const feacthingData=async()=>{
try{
  const res=await fetch('https://aluminum-delicate-snowshoe.glitch.me/tasks')
if(!res.ok)throw new Error('something went wrong!')
const data=await res.json();
setTask(data)
}catch(err){
  console.log(err.message)
}
}
  return (
<div className='bg-teal-900'>
<div className='wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex-col py-10 container mx-auto'>
    <Header/>
    <AddTask/>
    <TaskList tasks={tasks}/>
    <Fotter/>
    </div>
</div>
  );
};

export default App;
