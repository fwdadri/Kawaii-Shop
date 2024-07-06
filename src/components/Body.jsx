import '../components/Estilos.css'
import {useEffect, useRef, useState} from 'react'
import { addProduct} from '../servers/fetch';
import { getProductos}  from '../servers/fetch';
import {deleteProducto} from '../servers/fetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edit from './modal/edit';

import Swal from 'sweetalert2';



const Body= () => {//funcion flecha para indicar que es una funcion
//funcion flecha para indicar que es una funcion
      const [Imagen, setImagen]= useState('')//undifine cuando no hay comillas, con comillas es un vacio
      const [Nombre, setNombre]= useState('');//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState('');//useState permite manipular los estados de las variables
      const [Categoria, setCategoria]= useState('');
      const [Descripcion, setDescripcion]= useState('')
      const [update, setUpdate]= useState(0)//para que se actualice una vez subido el producto// solo con el uno se vuelve a cargar todooo
      const [Productos, setProductos] = useState([])

      const refModal = useRef()// y ese use ref khe

      const [Buscar, setBuscar]= useState('');

      const handleClick = (id) => {//ahora hace la funcion de delete
        Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminarlo!',
          cancelButtonText: 'No, cancelar!'
        }).then((result) => {
          if (result.isConfirmed) {

            deleteProducto(id);

            Swal.fire(
              '¡Eliminado!',
              'Tu archivo ha sido eliminado.',
              'success'
            );
          }
        });
      };


    
    console.log(refModal);
 

      ////VALIDACION PARA SUBIR PRODUCTO///////////////////////////////////////////////////////////////////////////////////
        const subir = async (imagen, nombre, precio, descripcion, Categoria) => {
  
          if (imagen ==''|| nombre ==''|| precio =='' || descripcion ==''|| Categoria ==''){ // null puede incluir unun espacio vacio
             alert("Complete los espacios vacios")

            }else{
              alert("Publicacion exitosa")

              addProduct(imagen, nombre, precio, descripcion, descripcion)
              
              setImagen('')
              setDescripcion('')
              setPrecio('')//forma correcta de vaciar inputs
              setNombre('')
              setCategoria('')

              setUpdate(update+1)//el mas 1 actualiza el state
            }
          }  

      ///GUARDAR PRODUCTOS/////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

       const mer = async () => {

       const data = await getProductos();//

       setProductos(data)
    
        }
       mer() //una vez subido el codigo  se actualiza el estado con el update par que se muestre de una vez

      }, [update]);//evita que caiga en un bucle infinito

      ////LA FUNCION DELETE ESTA EN UN FETCH//////////////////////////////////////////////////////////////////////////

const filtrando = async()=> {

   const valores = await getProductos()
   valores.filter(elem=>elem.Producto === Nombre)
   setBuscar(Buscar)

//como renderizar//estudiar proof y 
}


//funcion flecha porque si, porque es react

    return(  
     <>
    <br />
    <br />

      <div className='publicar'>
      <p className='Ppublicar'>Publicar Producto</p>
      <input className='navBuscar' type="text" placeholder='Buscar producto' value={Buscar} onChange={(e) => setBuscar (e.target.value.trim())}/>
      <button onClick={filtrando}>Buscar</button> 
      <br />
      <br />
      <br />
      <p className='Ppublicar'>Publicar Producto</p>
      <br />
      <input className='input_body' type='img' placeholder='img' value={Imagen} onChange={(e) => setImagen (e.target.value.trim())}></input>
      <br /><br />

      <input className='input_body' type="Nombre" placeholder='Nombre' value={Nombre} onChange={(e) => setNombre (e.target.value.trim())}/>
      <br /><br />

      <input className='input_body' type="Precio" placeholder='Precio' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
      <br /><br />

      <input className='input_body' type="Categoria" placeholder='Categoria' value={Categoria} onChange={(e) => setCategoria (e.target.value.trim())}/>
      <br /><br /> 

      <input className='input_body_descripcion' type="Descripcion" placeholder='Descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>
      <br /><br />

      <button className='btn_body' onClick={()=> subir(Imagen, Nombre, Precio, Descripcion)}>Subir Producto</button>
   

    </div>
    <br />

     <div className='productos_publicados'>
     <div className='grid'>
{/*todo lo que se javascrip en return va entre {} */} 

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
                  <Edit id={producto.id} nombre={producto.Producto} imagen={producto.Imagen} precio={producto.Precio} descripcion={producto.Descripcion} />

                  <Button variant="primary" id='btnEli' onClick={() => {setUpdate (update +1); handleClick(producto.id)}}>Eliminar</Button>
                </Card.Body >
              </Card>
        </div>
        </div>
        
      ))}
  
     </div>

     </div>
      
     <br />

     <style>{'body { background-color: rgb(222, 164, 210) }'}</style>
    </> 
    )}
  
export default Body