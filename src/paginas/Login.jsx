import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../css/components/login.css";
import { useContext, useState } from "react";

function Login() {
  const { loguearme } = useContext(Contexto);
  const navegacion = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const recuperar = () => {
    navegacion("/", { replace: true });

    if (usuario !== "" && password !== "") {
      loguearme("jab");
    } else {
      alert("Debes ingresar usuario y contraseña");
    }
  };
  return (
    <div className="login-oconteiner fondo-color">
      <form action="" className="login-oconteiner login-oconteiner-form">
        <h1>Login</h1>
        <input
          onChange={(e) => setUsuario(e.target.value)}
          className="login-ingreso"
          placeholder="Usuario"
          type="text"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="login-ingreso"
          placeholder="Contraseña"
          type="password"
          required
        />
        <button type="submit" className="login-boton" onClick={recuperar}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
