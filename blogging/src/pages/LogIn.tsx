import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { Link } from 'react-router-dom'
import { UseMainContext } from '../../context/MainContext'

const LogIn = () => {
    console.log(auth)
    const { email, password, setEmail, setPassword } = UseMainContext()

    const handleLogin = (e: any) => {
        e.preventDefault()

        
    }

  return (
    <div className='login'>
        <h1>Login</h1>
        <form action="" onSubmit={handleLogin}>
            <input type="email" name=""
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
        </form>
        <Link to='signin'>or create a new account</Link>
    </div>
  )
}

export default LogIn