import { createContext, useContext, useState } from "react"

const MainContext = createContext()

export function useMainContext() {
  return useContext(MainContext)
}

export function GeneralProvider({ children }) {
  const [textHeader, setTextHeader] = useState('Aumentando la creatividad')

  const handleChangeTextHeader = (value) => {
    setTextHeader(value)
  }

  return (
    <MainContext.Provider value={{ textHeader, handleChangeTextHeader }}>
      {children}
    </MainContext.Provider>
  )
}
