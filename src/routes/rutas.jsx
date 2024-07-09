import { Routes, Route} from 'react-router-dom'//importar
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/home'
import About from '../pages/about'
import Tienda from '../pages/tienda'
import PrivateRoutes from './PrivateRoutes'

function rutas() {

// sessionStorage.removeItem("session") poner esto es la funcion de cerrar sesion
 //llamar
  return (
    <div>
         <Routes>

            <Route path="/" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
            <Route path="/about" element = {<About/>} />


            <Route path="/tienda" 
            element = {<Tienda />} />


            <Route path="/home" 
            element ={<PrivateRoutes route={<Home />}/>}//ruta privada
            />

          

         </Routes>
      
    </div>
  )
}

//llamar componente, importar y exportar la funcion para mostrar en pantalla

export default rutas //exportar
