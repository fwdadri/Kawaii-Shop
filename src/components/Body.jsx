import '../components/Estilos.css'
import {useEffect, useState} from 'react'
import { addProduct} from '../servers/fetch';
import { getProductos}  from '../servers/fetch';
import {deleteProducto} from '../servers/fetch'
import { editarProduco } from '../servers/fetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Body= () => {//funcion flecha para indicar que es una funcion
//funcion flecha para indicar que es una funcion
      const [Imagen, setImagen]= useState()
      const [Nombre, setNombre]= useState();//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState();//useState permite manipular los estados de las variables
      const [Descripcion, setDescripcion]= useState()
 
      //el usuario iniciar se setea sin nada
      const [Productos, setProductos] = useState([])
      //se define el estado de la variable
      //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
       // addUsuario(Gmail, Usuario, Password)
       // alert("registro exitoso")
      //}
      function subir() {
  
          if (Imagen == null &&Nombre== null && Precio == null && Descripcion == null) { // null puede incluir unun espacio vacio

             alert("Complete los espacios vacios")

          }else{
              alert("Publicacion exitosa")
              addProduct(Imagen, Nombre, Precio, Descripcion)
              
              setDescripcion('')
              setPrecio('')//forma correcta de vaciar inputs
              setNombre('')
          }
      }  
      
      useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

       const mer = async () => {
       const data = await getProductos();
       setProductos(data) 
    
        }
       mer()

      }, []);//evita que caiga en un bucle infinito

      console.log(Productos)



      function eliminar() {

        deleteProducto()

        console.log("eliminando") //aqui se visualiza en console el task que se esta eliminando al hacer click

      window.location.reload() 

      }


      function editar() {
        editarProduco()

      }



    return(  
     <>
    <br />
    <br />
      <div className='publicar'>
      <p className='Ppublicar'>Publicar Producto</p>

      <input className='input_body' type='img' placeholder='img' value={Imagen} onChange={(e) => setImagen (e.target.value.trim())}></input>
      <br /><br />

      <input className='input_body' type="Nombre" placeholder='Nombre' value={Nombre} onChange={(e) => setNombre (e.target.value.trim())}/>
      <br /><br />

      <input className='input_body' type="Precio" placeholder='Precio' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
      <br /><br />
      
      <input className='input_body_descripcion' type="Descripcion" placeholder='Descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>
      <br /><br />
      <button className='btn_body' onClick={subir}>Subir Producto</button>
    </div>
    <br />

     <div className='productos_publicados'>
     <div className='grid'>
      {Productos.map((producto, index) => (
          <div className='cuadroo' key={index}>
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
                  <Button variant="primary" onClick={editar}>editar</Button>◦◦◦◦◦◦  
                  <Button variant="primary" id='btnEli'  onClick={eliminar}>Eliminar</Button>
                </Card.Body >
              </Card>
            </div>
        </div>
      ))}
      
     </div>
     </div>
      
     <br />
    </> 
    )}
  
export default Body