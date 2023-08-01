import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const useListaCliente = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
        } else {
          const data = await response.json();
          setData(data);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const useRegistrarCliente = async (element, url) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        ciudad: element.ciudad,
        zona: element.zona,
        descripcion: element.descripcion,
        imagen: element.imagen,
        precio: element.precio,
      }),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }

    const data = await response.json();
    console.log('Datos enviados al servidor:', data);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
};

  
  const useEliminarCliente = async (id) => {
    try {
      await fetch(`http://localhost:3000/perfil/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar el cliente");
    }
  };
  
  const ActualizarCliente = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/perfil/${id}`);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar el cliente");
    }
  };
  
  const useRemplazarClientes = async (element, id) => {
    try {
      await fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ciudad: element.ciudad,
          zona: element.zona,
          descripcion: element.descripcion,
          imagen: element.imagen,
          precio: element.precio,
        }),
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error al reemplazar los datos del cliente");
    }
  };
  
  export const listaCiudades = {
    useListaCliente,
    useRegistrarCliente,
    useEliminarCliente,
    ActualizarCliente,
    useRemplazarClientes,
  };
  