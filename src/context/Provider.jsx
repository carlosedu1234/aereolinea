import React, { useReducer, useState } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer.jsx";
import types from "./types";
import datos from "../datos/datos.js";
import miReducer2 from "./miReducer2";

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};

const valorInicial = [];
function Provider({ children }) {
  const [logueado, dispatch] = useReducer(miReducer, {}, init);

  const loguearme = (user) => {
    const action = {
      type: types.login,
      payload: user,
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

  const [venta, dispatch1] = useReducer(miReducer2, valorInicial);
  const [total, setTotal] = useState(0);
  const [ciudades, setCiudades] = useState(datos);

  return (
    <>
      <Contexto.Provider
        value={{
          ...logueado,
          loguearme,
          desloguearme,
          ciudades,
          setCiudades,
          venta,dispatch1,
          total,setTotal
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default Provider;
