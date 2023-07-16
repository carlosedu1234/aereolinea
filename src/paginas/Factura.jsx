import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import types from "../context/types";

function Factura() {
  const { venta, dispatch1,total } = useContext(Contexto);

 


  const cancelar = (dato) => {
    const state = {
      type: types.cancelar,
      payload: { ciudad: dato },
    };
    dispatch1(state);
  };

  return (
    <div>
      <h3>Lugares a visitar</h3>
      {venta.map((datos) => (
        <div key={datos.ciudad}>
          {datos.ciudad} {datos.precio}
          <button onClick={() => cancelar(datos.ciudad)}>Cancelar</button>
        </div>
      ))}
      <h3>Total a pagar</h3>
      <p >{total}</p>
    </div>
  );
}

export default Factura;
