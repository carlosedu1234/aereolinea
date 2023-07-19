import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../css/components/login.css";
import { useContext, useState } from "react";

function Login() {
  const { loguearme,usuario, setUsuario } = useContext(Contexto);
  const navegacion = useNavigate();
  
  const [password, setPassword] = useState("");
  const admin=()=>{
    setUsuario("administrador")
    loguearme(usuario);
  }

  const recuperar = () => {
    navegacion("/", { replace: true });

    if (usuario !== "" && password !== "") {
      loguearme(usuario);

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

        <button type="submit" className="login-boton" onClick={admin}>
          admin
        </button>
      </form>
    </div>
  );
}

export default Login;
