import { Routes, Route} from 'react-router-dom'//importar
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/home'

function rutas() {


 //llamar
  return (
    <div>
         <Routes>

            <Route path="/" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
            <Route path="/home" element = {<Home/>} />
        </Routes>
      
    </div>
  )
}

//llamar componente, importar y exportar la funcion para mostrar en pantalla

export default rutas //exportar
