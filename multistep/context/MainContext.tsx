import React, { createContext, useContext } from 'react'

const Context = createContext({})

export const MainContext = ( {children} ) => {
  return (
    <Context.Provider>
        {children}
    </Context.Provider>

  )
}

export const UseMainContext = () => {
    return useContext(Context)
}