import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='bg-red-400 w-[45%] py-6 px-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-green-400 w-[45%] py-6 px-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 w-[45%] py-6 px-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-orange-400 w-[45%] py-6 px-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers