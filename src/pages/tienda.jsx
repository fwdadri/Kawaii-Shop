import Header from '../components/Header'
import Fooder from '../components/Fooder'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
import Carrusel2 from '../components/Categorias'  

const Tienda= () => {//funcion flecha para indicar que es una funcion

    return(   
      <>
       
        <Header/>
        
        <Carosel/>
          <br />

        <Carrusel2/>

        <div className='tienda'>



          
        </div>

        <Fooder/>
      
      </>
  )
}
  
export default Tienda