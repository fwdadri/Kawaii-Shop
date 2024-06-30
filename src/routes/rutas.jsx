import { Routes, Route} from 'react-router-dom'//importar
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/home'
import About from '../pages/about'
import Tienda from '../pages/tienda'

function rutas() {


 //llamar
  return (
    <div>
         <Routes>

            <Route path="/" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
            <Route path="/home" element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/tienda" element = {<Tienda/>} />
        </Routes>
      
    </div>
  )
}

//llamar componente, importar y exportar la funcion para mostrar en pantalla

export default rutas //exportar
