import React, { useState } from 'react'
import { UseMainContext } from '../../context/MainContext'

const SignIn = () => {

    const { email, setEmail, password, setPassword, handleSignin } = UseMainContext()

    // const [email, setEmail] = useState<string>('')
    // const [password, setPassword] = useState<string>('')

    

  return (
    <div className='signin'>
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSignin}>
            <input type="email" name="email"
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input type="submit" /> */}
            <button className='btn'>Create</button>
        </form>
    </div>
  )
}

export default SignIn