import React, { useContext } from "react";
import "../css/components/Tarjeta.css";
import "../css/components/botones.css";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

function TarjetasAdmin({
  ciudad = "ciudad",
  descripcion = "Descripcion",
  imagen = "../img/bogota.jpg",
}) {
  const { ciudades, setCiudades } = useContext(Contexto);
  const ciudadDelete = ciudades.filter((dato) => dato.ciudad !== ciudad);

  
  const navegacion=useNavigate();

  const eliminar = () => {
     setCiudades(ciudadDelete);
   
  };


  return (
    <div className="ciudades-Tarjeta">
      <h2>{ciudad}</h2>
      <p> {descripcion}</p>
      <img src={imagen} alt="ciudad.png" />
      <div className="conteiner-circulo">
        <button className="boton-1" onClick={eliminar}
        >
          Eliminarpt
        </button>
        <button
          className="boton-1 boton-modificar"
          onClick={()=>navegacion(`/modificaadmin/${ciudad}`,{replace:false})}
        >
          Modificar
        </button>
      </div>
    </div>
  );
}

export default TarjetasAdmin;
