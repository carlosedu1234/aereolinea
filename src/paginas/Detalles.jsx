import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../css/Detalles.css";
import "../css/components/botones.css";
import "../css/components/fondos.css";
import types from "../context/types";

function Detalles() {
  const { nombre } = useParams();
  const { ciudades, dispatch1, setTotal, total, venta } = useContext(Contexto);
  const ciudad = ciudades.find((dato) => dato.ciudad === nombre);
  const estadoBtn = venta.find((dato) => dato.ciudad === nombre);

  const navecagion = useNavigate();
  const volver = () => {
    navecagion(-1);
  };
  const vendido = () => {
    setTotal(ciudad.precio + total);
    const action = {
      type: types.vendido,
      payload: { ciudad: ciudad.ciudad, precio: ciudad.precio },
    };
    dispatch1(action);
  };

  const cancelarventa = () => {
    setTotal(total-ciudad.precio);
    const action = {
      type: types.cancelar,
      payload: { ciudad: ciudad.ciudad },
    };
    dispatch1(action);
  };

  const imagen = ciudad.imagen;

  return (
    <div className="detalles-conteiner">
      <div className="imagen-conteiner">
        {" "}
        <img src={imagen} alt="ciudad.png" />
        <button className="boton-posicion" onClick={volver}>
          {" "}
          Volver
        </button>
        <p>${ciudad.precio}</p>
      </div>
      <div>
        <h1>{ciudad.ciudad}</h1>{" "}
      </div>
      <p>{ciudad.descripcion}</p>
      <p>{ciudad.zona}</p>
      {!estadoBtn && (
        <button onClick={vendido} className="boton-1 boton-detalles">
          Comprar
        </button>
      )}
      {estadoBtn && (
        <button onClick={cancelarventa} className="boton-1 boton-cancelar">
          Cancelar
        </button>
      )}
    </div>
  );
}

export default Detalles;
