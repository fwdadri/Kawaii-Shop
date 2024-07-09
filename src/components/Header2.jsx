import '../components/Estilos.css'
import img1 from '../img/logokawaii.jpg'
import img2 from '../img/kuroperfil.jpg'
import { Link } from "react-router-dom"

const  Header= () => {//funcion flecha para indicar que es una funcion

    return(  
      <>
      <header className="header">
        <div className='nav1'><img src={img1} alt="" className="logo2" /></div>
        <div className='nav1'><Link className='nav1' to="/about">Acerca de nosotros</Link></div>
        <div className='nav1'><Link className='nav1'  to="/tienda">Ir a Tienda</Link></div>
        <div className='nav1'> <Link className='nav1' to="/home">Canasta</Link></div>   
        <div className='nav1'><p className='nav1'>¡Hola Administradora!</p></div>    
        <div className="saludo">
        <div  className='nav1'><img className='admi'src={img2} alt="" /></div>
        </div>
    </header>
    </> 
  )}
  
export default Header