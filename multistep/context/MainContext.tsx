import React, { createContext, useContext, useState } from 'react'


export const Context = createContext({} as ContextType)

type ContextType = {
  isActive: number,
  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  handleClick: (id: number) => void,
  planActive: number,
  setPlanActive: React.Dispatch<React.SetStateAction<number>>
  monthly: boolean,
  setMonthly: React.Dispatch<React.SetStateAction<boolean>>
}

type ChildrenType = {
    children: React.ReactNode
}

export const MainContext = ({children}: ChildrenType) => {

  const [isActive, setIsActive] = useState(0)
  const [planActive, setPlanActive] = useState(0)
  const [monthly, setMonthly] = useState(false)

  const handleClick = (id:number) => {
    setIsActive(id)
  }

  return (
    <Context.Provider value={{
        isActive, setIsActive, planActive, setPlanActive, monthly, setMonthly,
        handleClick
    }}>
        {children}
    </Context.Provider>
  )
}   


export const UseMainContext = () => {
  return useContext(Context)
}