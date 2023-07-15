import React, { useContext } from 'react'
import Contexto from '../context/Contexto'

function Factura() {
    const {saldo}=useContext(Contexto)
  return (
    <div>
      <h1>{saldo}</h1>
    </div>
  )
}

export default Factura
