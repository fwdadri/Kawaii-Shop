import '../components/Estilos.css'
import {useEffect, useRef, useState} from 'react'
import { addProduct, editarProducto} from '../servers/fetch';
import { getProductos}  from '../servers/fetch';
import {deleteProducto} from '../servers/fetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalEdit from './modal/modalEdit';
import Edit from './modal/edit';






const Body= () => {//funcion flecha para indicar que es una funcion
//funcion flecha para indicar que es una funcion
      const [Imagen, setImagen]= useState('')//undifine cuando no hay comillas, con comillas es un vacio
      const [Nombre, setNombre]= useState('');//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState('');//useState permite manipular los estados de las variables
      const [Categoria, setCategoria]= useState('');
      const [Descripcion, setDescripcion]= useState('')
      const [update, setUpdate]= useState(0)//para que se actualice una vez subido el producto// solo con el uno se vuelve a cargar todooo
      const [Productos, setProductos] = useState([])

      //const [isEditing, setIsEditing] = useState(false);
      //const [editingId, setEditingId] = useState(null);

      const refModal = useRef()// y ese use ref khe

      const abrirModal = () =>{
        refModal.current.showModal()// esta cambiando el showModal a useRef

    }

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

      ////BORRAR//////////////////////////////////////////////////////////////////////////

      useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

        const mer = async () => {
 
        const data = await getProductos();//
 
        deleteProducto(data)

      }

        mer() //una vez subido el codigo  se actualiza el estado con el update par que se muestre de una vez
 
       }, [update])


       const editar = async() =>{

        editarProducto()
        
       }
      

//funcion flecha porque si, porque es react

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
                  <Button variant="primary" onClick={abrirModal}>Editar</Button>
                  <Edit id={producto.id} nombre={producto.Producto} imagen={producto.Imagen} precio={producto.Precio} descripcion={producto.Descripcion} />

                  <Button variant="primary" id='btnEli' onClick={() => {deleteProducto(producto.id); setUpdate (update +1)}}>Eliminar</Button>
                </Card.Body >
              </Card>
        </div>
        <ModalEdit ref={refModal} id={producto.id} key={producto.id}/>
        </div>
        
      ))}
  
     </div>
  
     </div>
      
     <br />
     <style>{'body { background-color: rgb(222, 164, 210) }'}</style>
    </> 
    )}
  
export default Body