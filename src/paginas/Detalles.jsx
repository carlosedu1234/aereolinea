import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../css/Detalles.css";
import "../css/components/botones.css";
import "../css/components/fondos.css";

function Detalles() {
  const { nombre } = useParams();
  const { ciudades, saldo, setSaldo } = useContext(Contexto);

  const ciudad = ciudades.find((dato) => dato.ciudad === nombre);
  const pago = ciudad.precio;
  const [btnComprar, setBtnComprar] = useState();
  localStorage.setItem("estado",true);
  const valor=localStorage.getItem("estado");

  const comprar = () => {
    if (btnComprar) {
      setSaldo(saldo + pago);
      setBtnComprar(!valor);
      localStorage.setItem("estado",true);

      
    } else {
      setSaldo(saldo - pago);
      setBtnComprar(valor);
      localStorage.setItem("estado",false);
     
    }
  };

  const imagen = `${process.env.PUBLIC_URL}/img/${ciudad.imagen}`;

  return (
    <div className="detalles-conteiner">
      <h1>{ciudad.ciudad}</h1>
      <img src={imagen} alt="ciudad.png" />
      <p>{ciudad.descripcion}</p>
      <p>{ciudad.precio}</p>
      <p>{ciudad.zona}</p>
      <button
        onClick={comprar}
        className={
          btnComprar ? "boton-1 boton-detalles" : "boton-1 boton-cancelar"
        }
      >
        {btnComprar ? "Comprar" : "Cancelar Compra"}
      </button>
    </div>
  );
}

export default Detalles;
