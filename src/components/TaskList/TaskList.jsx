import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto py-5 w-full mt-10 flex gap-5 flex-nowrap '>
        <div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded-xl text-sm'>High</h3>
                <h4 className='text-sm'>28 April 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete The Project</h2>
            <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate saepe provident quidem eius molestiae?</p>
        </div>
    </div>
  )
}

export default TaskList