import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { validaciones } from "../Validaciones/validarPrecio";
import "../css/agregarDatos.css";
import Contexto from "../context/Contexto";
import { useNavigate } from "react-router-dom";
import datosAgregar from "../datos/ciudadEstructura";


function AgregarDestino() {



  const navegacion = useNavigate();

  const { ciudades, setCiudades } = useContext(Contexto);

  const agregarCiudad = [...ciudades, datosAgregar];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const obtenerValores = (data) => {
    datosAgregar.ciudad = data.nombre;
    datosAgregar.zona = data.zona;
    datosAgregar.descripcion = data.descripcion;
    datosAgregar.imagen = data.imagen;
    datosAgregar.precio = parseInt(data.precio);
    setCiudades(agregarCiudad);
    navegacion("/registroexitoso", { replace: false });
  };

  const validarExistente = (nombre) => {
    const existe = ciudades.find((dato) => dato.ciudad === nombre);
    return !existe;
  };
  return (
    <div>
      <h1 className="titulo">Agregar destinos</h1>

      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="conteiner-datos">
          <label htmlFor="nombre">Nombre Ciudad:</label>
          <input
            id="nombre"
            placeholder="Nombre Ciudad"
            autoFocus
            {...register("nombre", {
              required: true,
              maxLength: 15,
              validate: validarExistente,
            })}
          />
        </div>

        {errors.nombre?.type === "required" && (
          <div className="conteiner-mensaje">
            El nombre de la ciudad es obligatoria
          </div>
        )}
        {errors.nombre?.type === "maxLength" && (
          <div className="conteiner-mensaje">Maximo 15 caracteres</div>
        )}
        {errors.nombre?.type === "validate" && (
          <div className="conteiner-mensaje">La ciudad ya existe</div>
        )}

        <div className="conteiner-datos">
          <label htmlFor="zona">Zona:</label>
          <input
            id="zona"
            placeholder="Zona"
            autoFocus
            {...register("zona", {
              required: true,
              maxLength: 2,
            })}
          />
        </div>

        {errors.zona?.type === "required" && (
          <div className="conteiner-mensaje">
            La zona de la ciudad es obligatoria
          </div>
        )}
        {errors.zona?.type === "maxLength" && (
          <div className="conteiner-mensaje">
            La zona tiene un maximo de dos querecteres
          </div>
        )}

        <div className="conteiner-datos">
          <label htmlFor="descripcion">Descripcion:</label>
          <input
            id="descripcion"
            placeholder="Descripcion"
            autoFocus
            {...register("descripcion", {
              required: true,
            })}
          />
        </div>
        {errors.descripcion?.type === "required" && (
          <div className="conteiner-mensaje">
            La descripcion de la ciudad es obligatoria
          </div>
        )}
        <div className="conteiner-datos">
          <label htmlFor="imagen">Imagen:</label>
          <input
            id="imagen"
            placeholder="Imagen"
            autoFocus
            {...register("imagen", {
              required: true,
              pattern: /^(https)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/,
            })}
          />
        </div>

        {errors.imagen?.type === "required" && (
          <div className="conteiner-mensaje">
            La imagen de la ciudad es obligatoria
          </div>
        )}
        {errors.imagen?.type === "pattern" && (
          <div className="conteiner-mensaje">
            La imagen tiene que ser una url
          </div>
        )}

        <div className="conteiner-datos">
          <label htmlFor="precio">Precio:</label>

          <input
            id="precio"
            placeholder="Precio"
            type="number"
            autoFocus
            {...register("precio", {
              required: true,
              validate: validaciones.validarPrecio,
            })}
          />
        </div>
        {errors.precio?.type === "required" && (
          <div className="conteiner-mensaje">
            El precio de la ciudad es obligatoria
          </div>
        )}
        {errors.precio?.type === "validate" && (
          <div className="conteiner-mensaje">
            El precio de la ciudad tiene que ser mayor a cero
          </div>
        )}

        <div className="conteiner-datos conteiner-boton">
          <input type="submit" />
        </div>
      </form>


    </div>
  );
}

export default AgregarDestino;
