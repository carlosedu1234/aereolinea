import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../paginas/Login.jsx";
import Recuperacion from "../paginas/Recuperacion.jsx";
import Router2 from "./Router2.jsx";
import RutasPublicas from "./RutasPublicas.jsx";
import RutasPrivadas from "./RutasPrivadas.jsx";

function Router1() {
  return (
    <>
      <Routes>

        <Route
          path="login"
          element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        />
        <Route
          path="recuperacion"
          element={
            <RutasPublicas>
              <Recuperacion />
            </RutasPublicas>
          }
        />

        <Route
          path="/*"
          element={
            <RutasPrivadas>
              <Router2 />
            </RutasPrivadas>
          }
        />
      </Routes>
    </>
  );
}

export default Router1;
