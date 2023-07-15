import { Routes, Route, Navigate } from "react-router-dom";
import Contenido1 from "../paginas/Contenido1";
import NavBar from "../components/NavBar";
import Contenido3 from "../paginas/Contenido3";
import Contenido2 from "../paginas/Contenido2";
import Informacion from "../paginas/Informacion"
import Detalles from "../paginas/Detalles";
import Factura from "../paginas/Factura"
function Router2() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="factura" element={<Factura/>}/>
        <Route path="Detalles/:nombre" element={<Detalles/>} />
        <Route path="informacion" element={<Informacion/>} />
        <Route path="contenido1" element={<Contenido1 />} />
        <Route path="contenido2" element={<Contenido2 />} />
        <Route path="contenido3" element={<Contenido3 />} />
        <Route path="/" element={<Navigate to="contenido1" />} />
      </Routes>
    </div>
  );
}

export default Router2;
