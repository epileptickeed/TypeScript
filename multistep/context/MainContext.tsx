import React, { createContext, useContext, useState } from 'react'
import { UseMainContext } from './UseMainContext'


export const Context = createContext({} as ContextType)

type ContextType = {
    isActive: number,
    setIsActive: React.Dispatch<React.SetStateAction<number>>,
    handleClick: (id: number) => void
}

type ChildrenType = {
    children: React.ReactNode
}

export const MainContext = ({children}: ChildrenType) => {

    const [isActive, setIsActive] = useState(0)

    const handleClick = (id:number) => {
        setIsActive(id)
    }

  return (
    <Context.Provider value={{
        isActive, setIsActive,
        handleClick
    }}>
        {children}
    </Context.Provider>
  )
}   