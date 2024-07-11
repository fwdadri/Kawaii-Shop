import Header from '../components/Header'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
import {getProductos } from '../servers/fetch'
import {useEffect, useState} from 'react'
import Fooder from '../components/Fooder'

import Ver from '../components/modal/ver'   

import Card from 'react-bootstrap/Card';


const Tienda= () => {//funcion flecha para indicar que es una funcion


  const [Productos, setProductos] = useState([]);  //que esta pasando aquiiiii?  
  
  
  const objetos = async () => {

    let product = await getProductos()
    setProductos(product)//un await no puede ir dentro de un useEffect 

    //setProductos(dataProductos)
  }

  objetos()

  useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

    console.log(Productos);

   },[Productos]);


  return(   
      <>
       
       <Header/>
        <Carosel/>
  
        <div className="task-tittle">
        <h2>Medias</h2>
        <h2>Funko Pops</h2>
        <h2>Peluches</h2>
        <h2>Pulseras</h2>
        <h2>Collares</h2>
        <h2>Envoltorios</h2>

       </div>


       <div className='tiendaPrincipal'>
        <div className='grid2'>

         {Productos.map((producto) => (
          <div className='cuadroo2' key={producto.id}>
              <Card className='cards2' style={{ width: '15rem', height: '10rem'}} >
                <Card.Img variant="top" src={producto.Imagen} />
                <Card.Body className='card-body'>
                  <Card.Title > <div className='bbb'></div>{producto.Precio}</Card.Title>
                  <Card.Text>
                      <div className='bbb' >{producto.Producto}</div>
                  </Card.Text>
                  <Ver id={producto.id} nombre={producto.Producto} imagen={producto.Imagen} precio={producto.Precio} descripcion={producto.Descripcion}/>
                  <button className='agre' id='btnEli'>Agregar </button>
                </Card.Body >
              </Card>
          </div>
          ))}


        </div>
        </div>


        <style>{'body { background-color: rgb(222, 164, 210) }'}</style>
        <Fooder/>
    </>
  )    
}
  
export default Tienda