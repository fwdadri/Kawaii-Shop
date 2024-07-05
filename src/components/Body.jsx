import '../components/Estilos.css'
import {useEffect, useState} from 'react'
import { addProduct} from '../servers/fetch';
import { getProductos}  from '../servers/fetch';
import {deleteProducto} from '../servers/fetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import Modal from 'react-bootstrap/Modal';




const Body= () => {//funcion flecha para indicar que es una funcion
//funcion flecha para indicar que es una funcion
      const [Imagen, setImagen]= useState('')//undifine cuando no hay comillas, con comillas es un vacio
      const [Nombre, setNombre]= useState('');//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState('');//useState permite manipular los estados de las variables
      const [Descripcion, setDescripcion]= useState('')
      const [update, setUpdate]= useState(0)//para que se actualice una vez subido el producto// solo con el uno se vuelve a cargar todooo
      
      const [Imagen1, setImagen1]= useState('')//undifine cuando no hay comillas, con comillas es un vacio
      const [Nombre1, setNombre1]= useState('');//se esta definiendo el valor gmail
      const [Precio1, setPrecio1]= useState('');//useState permite manipular los estados de las variables
      const [Descripcion1, setDescripcion1]= useState('')
 
      //el usuario iniciar se setea sin nada
      const [Productos, setProductos] = useState([])
      //se define el estado de la variable
      //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
       // addUsuario(Gmail, Usuario, Password)
       // alert("registro exitoso")
      //}

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      ////VALIDACION PARA SUBIR PRODUCTO///////////////////////////////////////////////////////////////////////////////////
        const subir = async (imagen, nombre, precio, descripcion) => {
  
          if (imagen ==''|| nombre ==''|| precio =='' || descripcion ==''){ // null puede incluir unun espacio vacio
             alert("Complete los espacios vacios")

            }else{
              alert("Publicacion exitosa")

              addProduct(imagen, nombre, precio, descripcion)
              
              setImagen('')
              setDescripcion('')
              setPrecio('')//forma correcta de vaciar inputs
              setNombre('')

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




      const cargar = (id) =>{

        localStorage.setItem('id',id)

      }

      const editar  = () =>{

        console.log(Imagen1, Nombre1, Precio1, Descripcion1)
 
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
                  <Button variant="primary" onClick={cargar(producto.id) }>Edita2r</Button>

                  <Button variant="primary" id='btnEli' onClick={() => {deleteProducto(producto.id); setUpdate (update +1)}}>Eliminar</Button>
                </Card.Body >
              </Card>
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <label htmlFor="">Cambiar IMG</label>
          <input type="text"  placeholder='text' onChange={(e) => setImagen1 (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Nombre</label>
          <input type="text" placeholder='text'  onChange={(e) => setNombre1 (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Precio</label>
          <input type="text" placeholder='text'onChange={(e) => setPrecio1 (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Descripcion</label>
          <input type="text" placeholder='descripcion' onChange={(e) => setDescripcion1 (e.target.value.trim())}/>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={handleShow }>editar</Button>
        </Modal.Footer>
      </Modal>
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