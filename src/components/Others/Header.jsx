import React from 'react'

const Header = () => {
  return (
    <div className='items-end flex justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold'>Yash👋</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-2xl cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header