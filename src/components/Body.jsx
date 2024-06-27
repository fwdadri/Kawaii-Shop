import '../components/Estilos.css'
import {useState} from 'react'
import { addProduct } from '../servers/fetch';

const Body= () => {//funcion flecha para indicar que es una funcion

    const [Producto, setProducto]= useState();//se esta definiendo el valor gmail
    const [Precio, setPrecio]= useState();//useState permite manipular los estados de las variables
    const [Descripcion, setDescripcion]= useState()//el usuario iniciar se setea sin nada
    //se define el estado de la variable
    //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
     // addUsuario(Gmail, Usuario, Password)
     // alert("registro exitoso")
    //}
    function subir() {

        if (Producto == null && Precio == null && Descripcion == null) { // null puede incluir unun espacio vacio
           alert("Complete los espacios vacios")
        }else{
            alert("Puclicacion exitosa")
            addProduct(Producto, Precio, Descripcion)
            setDescripcion('')
            setPrecio('')//forma correcta de vaciar inputs
            setProducto('')
        }
    }   

    return(  
     <>
    <br />
    <br />
    <div className='publicar'>
      <p className='Ppublicar'>Publicar Producto</p>
      <div className='publi_img'></div>
      <br /><br />
      <input className='input_body' type="Nombre" placeholder='Nombre' value={Producto} onChange={(e) => setProducto (e.target.value.trim())}/>
      <br /><br />
      <input className='input_body' type="Precio" placeholder='Precio' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
      <br /><br />
      <input className='input_body_descripcion' type="Descripcion" placeholder='Descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>
      <br /><br />
      <button className='btn_body' onClick={subir}>Subir Producto</button>
    </div>
    <br />
     <div className='productos_publicados'></div>
     <br />
    <br />
    <br />
    </> 
  )}
  
export default Body