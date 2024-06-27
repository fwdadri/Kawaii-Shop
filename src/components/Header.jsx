import '../components/Estilos.css'
import img1 from '../img/logokawaii.jpg'

const  Header= () => {//funcion flecha para indicar que es una funcion

    return(  
      <>
      <header className="header">
      <img src={img1} alt="" className="logo" />
              <p>Acerca de nosotros</p>
              <p className='tienda'  href="/">Ir a Tienda</p>
              <p className='administrar' href="/">Administrar Tienda</p>
      <div className="saludo">
       <div className='admi'><img src="" alt="" /></div>
       <p className='saludoadmi'>Hola Administradora</p>
      </div>
    </header>
    </> 
  )}
  
export default Header
  