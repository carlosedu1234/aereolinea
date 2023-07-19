import React, { useContext } from "react";
import "../css/contenido1.css";
import Contexto from "../context/Contexto";
import TarjetasAdmin from "../components/TarjetasAdmin";

function ModuloPrincipal() {
  const { ciudades } = useContext(Contexto);
  return (
    <div className="ciudades-conteiner">
      {ciudades.map((datos) => (
        <TarjetasAdmin key={datos.ciudad} {...datos} />
      ))}
      <TarjetasAdmin titulo="Bogota" descripcion="Capital de colombia" />
    </div>
  );
}

export default ModuloPrincipal;
