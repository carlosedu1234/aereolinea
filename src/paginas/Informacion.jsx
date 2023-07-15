import { useContext } from "react";
import Contexto from "../context/Contexto"
import Tarjetas from "../components/Tarjetas";
import "../css/contenido1.css"

function Informacion({zona}) {

    const {ciudades} = useContext(Contexto);
    const listado=ciudades.filter((filter)=>filter.zona.toLowerCase()===zona)
   
  return (
    <div className="ciudades-conteiner">

      {listado.map((datos)=><Tarjetas key={datos.ciudad}{...datos} listado/>)}
    
    </div>
  )
}

export default Informacion
