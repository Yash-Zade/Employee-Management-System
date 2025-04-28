import React, { useContext } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser]=useState(null)
  const authdata = useContext(AuthContext)


  const handleLogin = (email,password) => {
    if(email == 'admin@admin.com' && password == '123'){
      setUser(admin)
    }else if(email=='employee@employee.com' && password == '123'){
      setUser('employee')
    }
    else{
      alert("Invalid Credencials")
    }
  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard /> : null) }
    </>
  )
}

export default App
