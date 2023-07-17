import React from "react";
import "../css/components/Tarjeta.css";
import { useNavigate } from "react-router-dom";
import "../css/components/botones.css"

function Tarjetas({
  ciudad = "ciudad",
  descripcion = "Descripcion",
  imagen = "../img/bogota.jpg",
}) {


  const navegacion = useNavigate();
  const imagenUrl = `${process.env.PUBLIC_URL}/img/${imagen}`;
  const masDetalles = () => {
    navegacion(`/Detalles/${ciudad}`, { replace: false });
  
  };

  return (
    <div className="ciudades-Tarjeta">
      <h2>{ciudad}</h2>
      <p> {descripcion}</p>
      <img src={imagenUrl} alt="ciudad.png" />
      <button className="boton-1" onClick={masDetalles}>Comprar</button>
    </div>
  );
}

export default Tarjetas;
