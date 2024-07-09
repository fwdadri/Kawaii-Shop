import Header from '../components/Header'
import Fooder from '../components/Fooder'
import Carosel from '../components/Carrusel'
import '../pages/tienda.css'
import {getProductos } from '../servers/fetch' 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Tienda= () => {//funcion flecha para indicar que es una funcion

  const [Productos, setProductos] = useState([]);


  useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

    const dataProductos = await getProductos;
    renderProducts()

   }, []);


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

    {Productos.map((producto) => (
          <div className='cuadroo' key={producto.id}>
            <div className='father'>
              <Card className='cards' style={{ width: '15rem', height: '10rem'}} >
                <Card.Img variant="top" src={producto.Imagen} />
                <Card.Body className='card-body'>
                  <Card.Title > <div className='bbb'>{producto.Producto}</div></Card.Title>
                  <Card.Text>
                      <div className='bbb' >{producto.Precio}</div>
                      <Card.Text>
                      <div className='bbb' >{producto.Descripcion}</div>
                  </Card.Text>
                  </Card.Text>
                  <Button variant="primary" id='btnEli'>Agregar Producto</Button>
                </Card.Body >
              </Card>
        </div>
        </div>
      ))}
       
    </>
  )    
}
  
export default Tienda