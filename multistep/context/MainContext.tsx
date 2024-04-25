import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import plans from '../data/plans.json'


export const Context = createContext({} as ContextType)

type ContextType = {
  isActive: number,
  planActive: number,
  yearly: boolean,
  planInfo: string,
  planPrice: number,

  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  setPlanActive: React.Dispatch<React.SetStateAction<number>>
  setYearly: React.Dispatch<React.SetStateAction<boolean>>,
  setPlanInfo: React.Dispatch<React.SetStateAction<string>>,
  setPlanPrice: React.Dispatch<React.SetStateAction<number>>

  handleClick: (id: number) => void,
  setPlan: (index: number, title: string, priceMonthly: number, priceYearly: number) => void
}

type ChildrenType = {
    children: React.ReactNode
}

export const MainContext = ({children}: ChildrenType) => {

  const [isActive, setIsActive] = useState(0)
  const [planActive, setPlanActive] = useState(0)
  const [yearly, setYearly] = useState(false)
  const [planInfo, setPlanInfo] = useState('')
  const [planPrice, setPlanPrice] = useState(0)

  const handleClick = (id:number) => {
    setIsActive(id)
  }

  const setPlan = (index:number, title:string, priceMonthly:number, priceYearly:number) => {
    setPlanActive(index)
    setPlanInfo(title)

    yearly ? setPlanPrice(priceYearly) : setPlanPrice(priceMonthly)

  }
  
  useEffect(() => {
    const selectedPlan = plans[planActive]; 
    const price = yearly ? selectedPlan.priceYearly : selectedPlan.priceMonthly;
    setPlanPrice(price);
  }, [yearly, planActive, plans, setPlanPrice]);

  return (
    <Context.Provider value={{
        isActive, setIsActive, planActive, setPlanActive, yearly, setYearly, planInfo, setPlanInfo, planPrice, setPlanPrice,
        handleClick, setPlan
    }}>
        {children}
    </Context.Provider>
  )
}   


export const UseMainContext = () => {
  return useContext(Context)
}