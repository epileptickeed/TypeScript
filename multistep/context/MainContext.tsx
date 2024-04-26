import React, { createContext, useContext, useEffect, useState } from 'react'
import plans from '../data/plans.json'
import addons from '../data/addons.json'


export const Context = createContext({} as ContextType)

type TitlesTypes = {
  title: string,
  priceMonthly: number,
  priceYearly: number,
}


type ContextType = {
  isActive: number,
  planActive: number,
  yearly: boolean,
  planInfo: string,
  planPrice: number,
  total: number,
  isChecked: any[],
  allTitles: TitlesTypes[],

  setIsActive: React.Dispatch<React.SetStateAction<number>>,
  setPlanActive: React.Dispatch<React.SetStateAction<number>>
  setYearly: React.Dispatch<React.SetStateAction<boolean>>,
  setPlanInfo: React.Dispatch<React.SetStateAction<string>>,
  setPlanPrice: React.Dispatch<React.SetStateAction<number>>,
  setAllTitles: React.Dispatch<React.SetStateAction<TitlesTypes[]>>,

  handleClick: (id: number) => void,
  setPlan: (index: number, title: string, priceMonthly: number, priceYearly: number) => void,
  handleAddons: (index: number, title: string, priceMonthly: number, priceYearly: number, checked: boolean) => void,
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

  const [isChecked, setIsChecked] = useState(Array(addons.length).fill(false))
  const [allTitles, setAllTitles] = useState<TitlesTypes[]>([])

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
  }, [yearly, planActive, plans]);

  

  const handleAddons = (index: number, title: string, priceMonthly: number, priceYearly: number, checked: boolean) => {
    const newCheckedItems = [...isChecked];
    newCheckedItems[index] = !newCheckedItems[index]
    setIsChecked(newCheckedItems)
    
    const existingTitle = title

    if(!checked) {
      if(!allTitles.some(item => item.title === existingTitle)){
        setAllTitles(current => {
          return [
            ...current,
            {title: title, priceMonthly: priceMonthly, priceYearly:priceYearly}
          ]
        })
      } 
    } else {
      setAllTitles(item => item.filter(item => item.title !== existingTitle))
    }

    
  }


  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(planPrice)
    let allPrices: number[] = []
    allTitles.map((item) => {
      yearly ? allPrices.push(item.priceYearly) : allPrices.push(item.priceMonthly);
      const sumAllPrices = allPrices.reduce((acc,curval) => acc+curval)
      setTotal(planPrice + sumAllPrices)
    })
  }, [yearly, planPrice, allTitles])


  return (
    <Context.Provider value={{
        isActive, setIsActive, planActive, setPlanActive, yearly, setYearly, planInfo, setPlanInfo, planPrice, setPlanPrice, allTitles, setAllTitles, total,
        handleClick, setPlan, isChecked, handleAddons
    }}>
        {children}
    </Context.Provider>
  )
}   


export const UseMainContext = () => {
  return useContext(Context)
}