import React, { useReducer,useState } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer.jsx";
import types from "./types";
import datos from "../datos/datos.js"

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};

function Provider({ children }) {
  const [logueado, dispatch] = useReducer(miReducer, {}, init);

  const loguearme = (user) => {
    const action = {
      type: types.login,
      payload:user
    };
    localStorage.setItem("estado", true);
    dispatch(action);
    
  };

  const desloguearme = () => {
    const action = {
      type: types.logaut,
    };
    localStorage.removeItem("estado");
    dispatch(action);
  };

  const [ciudades,setCiudades]=useState(datos);
  const [saldo,setSaldo]=useState(0);

  return (
    <>
      <Contexto.Provider
        value={{
          ...logueado,
          loguearme,
          desloguearme,
          ciudades,
          setCiudades,
          saldo,setSaldo,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default Provider;
