// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import funko from '../img/funpop.jpg';
import peluches from '../img/hellokitty.jpg'
import tazas from '../img/pushen.jpg'




//se tenia que desactivar las idicaciones activas de react boostrap que estan en true, se pasan a false para desactivarla
function CarruselC() {

  return (
    <div>  
      <Carousel data-theme="black" className='Carrusel' indicators ={false}>

      <Carousel.Item className='CorruselItems'>

        <img
          className="d-block"
          src={funko}
          alt="First slide"
        />

      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block"
          src={peluches}
          alt="Second slide"
        />

      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block"
          src={tazas}
          alt="Second slide"
        />

      </Carousel.Item>


    </Carousel>
    
    <div className='slider'>

    </div>
    
    </div>
  )
}
export default CarruselC