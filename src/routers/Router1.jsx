import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Login from "../paginas/Login.jsx";
import Recuperacion from "../paginas/Recuperacion.jsx";
import Router2 from "./Router2.jsx";
import RutasPublicas from "./RutasPublicas.jsx";
import RutasPrivadas from "./RutasPrivadas.jsx";
import Contexto from "../context/Contexto.jsx";
import RutasAdmin from "./RutasAdmin.jsx";
import Router3 from "./Router3.jsx";


function Router1() {
  const {usuario } = useContext(Contexto);
  return (
    <>
      <Routes>
        <Route path="login" element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }/>
        
        <Route path="recuperacion" element={
            <RutasPublicas>
              <Recuperacion />
            </RutasPublicas>
          }/>

        <Route path="/*" element={
           (usuario!=="administrador")? 
           <RutasPrivadas>
              <Router2 />
            </RutasPrivadas>
            :<RutasAdmin><Router3/></RutasAdmin>
          }/>
        
      </Routes>
    </>
  );
}

export default Router1;
