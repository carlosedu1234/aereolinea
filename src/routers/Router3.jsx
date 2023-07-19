import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ModuloPrincipal from '../paginaAdmin/ModuloPrincipal'
import AgregarDestino from '../paginaAdmin/AgregarDestino'
import NavBarAdmin from '../components/NavBarAdmin'
import ModificarAdmin from '../paginaAdmin/ModificarAdmin'
import RegistroExitoso from '../components/RegistroExitoso'

function Router3() {
  return (
    <div>
    <NavBarAdmin/>
    <Routes>
        <Route path='registroexitoso' element={<RegistroExitoso/>}/>
        <Route path="moduloprincipal" element={ <ModuloPrincipal/>}/>
        <Route path="agregardestino" element={ <AgregarDestino/>}/>
        <Route path="modificaadmin" element={ <ModificarAdmin/>}/>
        <Route path="/" element={<Navigate to="moduloprincipal" />} />
    </Routes>
    </div>
  )
}

export default Router3
