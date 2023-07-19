import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/components/navBar.css";
import Contexto from "../context/Contexto";

const NavBarAdmin = () => {
  const navegacion = useNavigate();
  const { desloguearme } = useContext(Contexto);
  const login = () => {
    navegacion("/login", { replace: true });
    desloguearme();
  };

  return (
    <div className="navBar-conteiner">
      <div>
        <NavLink to="moduloprincipal">Total Destinos</NavLink>
        <NavLink to="agregardestino">Agregar Destinos</NavLink>
      </div>
      <button onClick={login}>Logaut</button>
    </div>
  );
};

export default NavBarAdmin;
