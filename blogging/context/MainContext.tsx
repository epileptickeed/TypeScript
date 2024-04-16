import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react'
import { auth, db } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Firestore, addDoc, collection, doc, getDocs } from 'firebase/firestore'

type ContextType = {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    password: string
    setPassword: React.Dispatch<React.SetStateAction<string>>
    handleLogin: React.FormEventHandler<HTMLFormElement>
    handleSignin: React.FormEventHandler<HTMLFormElement>
}

type ChildrenTypeProps = {
    children: ReactNode
}



const Context = createContext({} as ContextType)

export const MainContext = ({ children }: ChildrenTypeProps) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = () => {}

    const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()   
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            try{
                const usersCollectionRef = collection(db, 'users')
                await addDoc(usersCollectionRef, {
                    email: user.email,
                    password: password
                })
                console.log(email, password)
            } catch (err) { 
                console.error(err)
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        


        console.log(email)
        setEmail('')
        setPassword('')
    }

  return (
    <Context.Provider value={{
        email, setEmail, password, setPassword,

        handleLogin, handleSignin,
    }}
    >
        {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
    return useContext(Context)
}