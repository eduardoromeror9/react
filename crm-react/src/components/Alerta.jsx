import React, { Children } from 'react'

const Alerta = ({ children }) => {
  return (

    <div className="text-red-500 text-center my-4 font-bold p-1 uppercase">
      { children }
    </div>

  )
}

export default Alerta