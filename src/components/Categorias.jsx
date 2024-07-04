import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import funko from '../img/funpop.jpg';
import peluches from '../img/peluches.jpg'
import tazas from '../img/tazas.jpg'
import pulseras from '../img/pulseras.jpg'



//se tenia que desactivar las idicaciones activas de react boostrap que estan en true, se pasan a false para desactivarla
function Carrusel2() {

  return (
    <div>  
      <Carousel data-theme="black" className='Carrusel' indicators ={false}>

      <Carousel.Item className='CorruselItems'>
        <div className='redondo'>
        <img
          className="c-block"
          src={funko}
          alt="First slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='redondo'>
        <img
          className="c-block"
          src={peluches}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='redondo'>
        <img
          className="c-block"
          src={tazas}
          alt="Second slide"
        />
        </div>
      </Carousel.Item>

      <Carousel.Item>

        <div className='redondo'>
        <img
          className="c-block"
          src={pulseras}
          alt="Second slide"
        />
      </div>  

      </Carousel.Item>

    </Carousel>
    
    <div className='slider'>

    </div>
    
    </div>
  )
}
export default Carrusel2