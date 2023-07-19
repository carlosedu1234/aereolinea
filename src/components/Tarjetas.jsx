import React, { useContext } from "react";
import "../css/components/Tarjeta.css";
import { useNavigate } from "react-router-dom";
import "../css/components/botones.css"
import Contexto from "../context/Contexto";

function Tarjetas({
  ciudad,
  descripcion,
  imagen,
}) {

 const {venta}=useContext(Contexto) 
 const estadoVwnta = venta.find((dato) => dato.ciudad === ciudad);
  const navegacion = useNavigate();
  const masDetalles = () => {
    navegacion(`/Detalles/${ciudad}`, { replace: false });
  
  };

  console.log(venta.ciudad);
  return (
    <div className="ciudades-Tarjeta">
      <h2>{ciudad}</h2>
      <p> {descripcion}</p>
      <img src={imagen} alt="ciudad.png" />
      <div className="conteiner-circulo"><button className="boton-1" onClick={masDetalles}>Comprar</button>
      {estadoVwnta&& <div className="circulo"></div>}</div>
      
    </div>
  );
}

export default Tarjetas;
