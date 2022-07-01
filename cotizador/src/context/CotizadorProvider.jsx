import { useState, createContext } from "react"


const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

  return (
    <CotizadorContext.Provider 
      value={{
        modal,
        cambiarState
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext