import Header from '../components/Header'
import Fooder from '../components/Fooder'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
 

const Tienda= () => {//funcion flecha para indicar que es una funcion

    return(   
      <>
       
        <Header/>
        
        <Carosel/>
          <br />

        <div className='tienda'>



          
        </div>

        <Fooder/>
        <style>{'body { background-color: rgb(222, 164, 210);}'}</style>
      </>
  )
}
  
export default Tienda