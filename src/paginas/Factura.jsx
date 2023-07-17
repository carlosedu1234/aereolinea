import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import types from "../context/types";
import "../css/facturacion.css"
function Factura() {
  const { venta, dispatch1,total,usuario,setTotal } = useContext(Contexto);

 


  const cancelar = (dato) => {
    setTotal(total-dato.precio)
    const state = {
      type: types.cancelar,
      payload: { ciudad: dato.ciudad },
    };
    dispatch1(state);
  };

  return (
    <div className="conteiner-factura">
      <h2>Factura</h2>
      <h3>Lugares a visitar</h3>
      {venta.map((datos) => (
        <div className="conteiner-factura-datos" key={datos.ciudad}>
          {datos.ciudad}: (${datos.precio})
          <button onClick={() => cancelar(datos)} className="boton-cancelar-fac">Cancelar</button>
        </div>
      ))}
      <h3>Nombre de Uuario:</h3>
      <p> {usuario}</p>
      <h3>Total a pagar</h3>
      <p >${total}</p>
    </div>
  );
}

export default Factura;
