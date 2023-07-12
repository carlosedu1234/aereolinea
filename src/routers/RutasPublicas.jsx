import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";

function RutasPublicas({children}) {
  const { estado } = useContext(Contexto);
  return (!estado) ? children : <Navigate to="/contenido1" />;
}

export default RutasPublicas;
