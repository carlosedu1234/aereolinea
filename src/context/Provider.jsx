import React, { useReducer } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer.jsx";
import types from "./types";

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};

function Provider({ children }) {
  const [logueado, dispatch] = useReducer(miReducer, {}, init);

  const loguearme = () => {
    const action = {
      type: types.login,
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

  return (
    <>
      <Contexto.Provider
        value={{
          ...logueado,
          loguearme,
          desloguearme,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default Provider;
