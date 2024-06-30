import Header from '../components/Header'
import Fooder from '../components/Fooder'
import imgproducts from '../img/miniso.jpg';
import '../pages/about.css'
import imgcreador from '../img/kuroperfil.jpg';

const  About= () => {//funcion flecha para indicar que es una funcion

    return(   

    <>
    <Header/>
     <div className='aboutUs'>

     </div>

    <div className='about-text'>
      
      <div className='text-a'><p className='p'>En In Kawaii Shop, comprendemos la alegría y la fascinación que conlleva la cultura kawaii. Nuestra misión es brindar una experiencia de compra agradable que lo transportará a un mundo de encanto y felicidad infinitos. Seleccionamos cuidadosamente nuestra colección para ofrecer una amplia gama de productos inspirados en los queridos personajes y la estética de Sanrio.
     </p></div> 
     <div className='text-b'><img src={imgproducts} alt="" className='img-foto' /> </div>
  
      <div className='borde'><img src={imgcreador} alt="" className='img-foto2' /> </div>
      <div className='borde' ><p className='text-c'>Una cosa que probablemente no sabías acerca de Kawaii Gift Shop, es que su fundadora, Adriana, es la responsable de diseñar cada uno de los hermosos arreglos que llegan a tu casa en esas fechas especiales.
      Adriana está sumamente feliz de poder compartir su amor por los regalos con todos ustedes, Adriana tambien se encarga de toda la parte administrativa y tecnológica detrás de la magia de kawaii Gift Shop, rara vez se le ve molesta y siempre tiene una sonrisa en el rostro
     </p></div> 

    </div>

      
    <Fooder/>

    </>
  )
}
  
export default About