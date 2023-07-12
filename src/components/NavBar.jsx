import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/components/navBar.css";
import Contexto from "../context/Contexto";

const NavBar = () => {
  const navegacion = useNavigate();
  const { desloguearme } = useContext(Contexto);
  const login = () => {
    navegacion("/login", { replace: true });
    desloguearme();
  };

  return (
    <div className="navBar-conteiner">
      <div>
        <NavLink to="contenido1">Locaciones</NavLink>
        <NavLink to="contenido2">Vuelos Disponibles</NavLink>
        <NavLink to="contenido3">Planes</NavLink>
      </div>
      <button onClick={login}>Logaut</button>
    </div>
  );
};

export default NavBar;
