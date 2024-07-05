import Header from '../components/Header'
import Fooder from '../components/Fooder'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
import Banner from '../components/Banner' 
// import Body from '../components/Body'

const Tienda= () => {//funcion flecha para indicar que es una funcion

    return(   
      <>
       
        <Header/>
        
        <Carosel/>
        <Banner/>
  
        <div className='tienda'>


          
        </div>

        <Fooder/>
        <style>{'body { background-color: rgb(222, 164, 210);}'}</style>
      </>
  )
}
  
export default Tienda