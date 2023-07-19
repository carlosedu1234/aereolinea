import Ok from "../img/ok.png"
import "../css/components/login.css"
import "../css/components/registroExitoso.css"
import { useNavigate } from "react-router-dom"

function RegistroExitoso() {
    const navegacion=useNavigate();

  return (
    <div className="registro-exitoso-conteiner">
        <div className="conteiner-tarjeta"> 
        <h1>Registro Exitoso</h1>
        <div className="conteiner-imagen">
        <img src={Ok} alt="registroExitoso.png" />
      </div>
      <button className="login-boton" onClick={()=>navegacion("/moduloprincipal",{replace:false})}>Regresar a inicio</button>
      </div>
    </div>
  )
}

export default RegistroExitoso
