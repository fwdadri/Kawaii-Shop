import '../components/Estilos.css'
import {useEffect, useState} from 'react'
import { addProduct, editarProducto} from '../servers/fetch';
import { getProductos}  from '../servers/fetch';
import {deleteProducto} from '../servers/fetch'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Body= () => {//funcion flecha para indicar que es una funcion
//funcion flecha para indicar que es una funcion
      const [Imagen, setImagen]= useState('')//undifine cuando no hay comillas, con comillas es un vacio
      const [Nombre, setNombre]= useState('');//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState('');//useState permite manipular los estados de las variables
      const [Descripcion, setDescripcion]= useState('')
      const [update, setUpdate]= useState(0)//para que se actualice una vez subido el producto// solo con el uno se vuelve a cargar todooo
     
      const [Productos, setProductos] = useState([]) //el usuario iniciar se setea sin nada
      const [modoEdicion , setModoEdicion] =useState(false);
      const[idEditando,setIdEditando] = useState(null)

      //se define el estado de la variable
      //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
       // addUsuario(Gmail, Usuario, Password)
       // alert("registro exitoso")
      //}

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

        confirm('seguro?')
      }

        mer() //una vez subido el codigo  se actualiza el estado con el update par que se muestre de una vez
 
       }, [update])

      ////EDITAR/////////////////////////////////////////////////////////////////////////////////////////////7
       const editar = async () => {

        if (!Imagen.trim() ||!Nombre.trim() || !Descripcion.trim() || !Precio.trim()) return;

        try {
          const productoEditado = {Imagen, Nombre, Descripcion, Precio };//donde va usado producto editado
          await editarProducto(idEditando, productoEditado);//khe ProductsPUT

          getProductos();//obtenerProductos

          setNombre('');
          setDescripcion('');
          setPrecio('');
          
          setModoEdicion(false); // khe donde van
          setIdEditando(null);//khe donde van

        } catch (error) {
          console.error('Error al editar producto:', error);
        }
      };

      const handleAgregarEditar = (e) => {//khe, el agregar ya lo tengo, y donde se supone que va usado
        e.preventDefault();

        if (modoEdicion) {//khe, de donde salio modoEdicion
          editarProducto();

        } else {
          setProductos();
        }
      };

      const handleEditar = (producto) => {//donde va 

        setImagen(producto.nombre);
        setNombre(producto.nombre);
        setDescripcion(producto.descripcion);
        setPrecio(producto.precio);

        setModoEdicion(true); //aun sigo sin saber
        
        setIdEditando(producto.id); //y donde vaaaa

      };
      //////////////////////////////////////////////////////////////////////////////////////////
    

//funcion flecha porque si, porque es react

    return(  
     <>
    <br />
    <br />
      <div className='publicar'>
      <p className='Ppublicar'>Publicar Producto</p>
      <form onSubmit={handleAgregarEditar}>


      <input className='input_body' type='img' placeholder='img' value={Imagen} onChange={(e) => setImagen (e.target.value.trim())}></input>
      <br /><br />

      <input className='input_body' type="Nombre" placeholder='Nombre' value={Nombre} onChange={(e) => setNombre (e.target.value.trim())}/>
      <br /><br />

      <input className='input_body' type="Precio" placeholder='Precio' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
      <br /><br />
      
      <input className='input_body_descripcion' type="Descripcion" placeholder='Descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>
      <br /><br />
      <button className='btn_body' onClick={()=> subir(Imagen, Nombre, Precio, Descripcion)}>Subir Producto</button>

      <br />
      <br />

      <p className='Ppublicar'>Editar Producto</p>
      

      <input className='input_body' type='img' placeholder='img' value={Imagen} onChange={(e) => setImagen (e.target.value.trim())}></input>
      <br /><br />

      <input className='input_body' type="Nombre" placeholder='Nombre' value={Nombre} onChange={(e) => setNombre (e.target.value.trim())}/>
      <br /><br />

      <input className='input_body' type="Precio" placeholder='Precio' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
      <br /><br />
      
      <input className='input_body_descripcion' type="Descripcion" placeholder='Descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>
      <br /><br />
      
     
      <button className='btn_body' onClick={()=> editar(Imagen, Nombre, Precio, Descripcion)}>Subir Producto</button>
      </form>
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
                  <Button variant="primary" onClick={() =>handleEditar(producto)}>editar </Button>◦◦◦◦◦◦ {/*se vuelve a renderizar con el update+1 */} 
                  <Button variant="primary" id='btnEli' onClick={() => {deleteProducto(producto.id); setUpdate (update +1)}}>Eliminar</Button>
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