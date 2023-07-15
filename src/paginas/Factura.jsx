import React, { useContext } from "react";
import Contexto from "../context/Contexto";

function Factura() {
  const { venta } = useContext(Contexto);

  return (
    <div>
      <h3>Lugares a visitar</h3>
      {venta.map((datos) => 
      <div key={datos.ciudad}>{datos.ciudad} {datos.precio}
      <button>Cancelar</button></div>
      )}
      
    </div>
  );
}

export default Factura;
