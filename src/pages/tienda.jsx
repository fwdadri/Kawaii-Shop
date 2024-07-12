import Header from '../components/Header'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
import {getProductos } from '../servers/fetch'
import {useEffect, useState} from 'react'
import Fooder from '../components/Fooder'

import Ver from '../components/modal/ver'   

import Card from 'react-bootstrap/Card';


const Tienda= () => {//funcion flecha para indicar que es una funcion

  const [Productos, setProductos] = useState([]);
  const [Buscar, setBuscar]= useState('');


  const filtrados = async () => {

    const data = await getProductos();
    const categoriaFiltrada = data.filter(prdct => prdct.Producto.toLowerCase().includes(Buscar.toLowerCase()));//categoria trae el producto
    setProductos(categoriaFiltrada);
   };


   useEffect(() => {//matiene todo actualizado

    filtrados()
    
   },[])
   



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
<br />
<div className='buscando'>
<br />
<p className='vv'>Buscar: 
  <input className='navBuscar2' type="text" placeholder='Buscar producto' value={Buscar} onChange={(e) =>setBuscar(e.target.value)}/>
</p>
<button onClick={filtrados} className='filtr'>buscar</button>
<br />
<br />
</div>
<br />
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