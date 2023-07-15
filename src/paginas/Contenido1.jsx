import React, { useContext } from "react";
import "../css/contenido1.css";
import Tarjetas from "../components/Tarjetas.jsx";
import Contexto from "../context/Contexto";

function Contenido1() {
  const { ciudades } = useContext(Contexto);
  return (
    <div className="ciudades-conteiner">
      {ciudades.map((datos) => (
        <Tarjetas key={datos.ciudad} {...datos} />
      ))}
      <Tarjetas titulo="Bogota" descripcion="Capital de colombia" />
    </div>
  );
}

export default Contenido1;
