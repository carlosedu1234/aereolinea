import { useContext } from "react";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";

function RutasAdmin({ children }) {
    const { estado,usuario } = useContext(Contexto);
    return (estado&&usuario==="administrador") ? children : <Navigate to="/login" />;
}

export default RutasAdmin;
