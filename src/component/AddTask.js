import React from 'react'

function AddTask() {
  return (
   <form action="" className='bg-gray-900 mx-auto container flex justify-between'>
    <input type="text" placeholder='what things to do' className='bg-transparent outline-none border-b-2 py-2  px-5 focus:border-teal-600 '/>
    <button className='px-5 bg-teal-900 py-2 rounded-sm mt-5 border-2 border-teal-200 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add task</button>
   </form>
  )
}

export default AddTask