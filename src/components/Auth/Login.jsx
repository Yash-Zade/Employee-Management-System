 import React, { useState } from 'react'

const login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email: ",email)
        console.log("password: ",password)
        
        setEmail("")
        setPassword("")
    }
    
  return (
    <div className='flex  bg-gray-800 h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
                onSubmit={(e) =>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-2 px-5 placeholder:text-gray-400' type='email' placeholder='email'></input>
                <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required
                    className='text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-2 px-5 mt-5 placeholder:text-gray-400' type='password' placeholder='password'></input>
                <button className='text-white border-none outline-none border-2 rounded-full bg-emerald-600 text-xl py-2 px-5 mt-3 cursor-pointer' >Login</button>
            </form>

        </div>
    </div>
  )
}

export default login
