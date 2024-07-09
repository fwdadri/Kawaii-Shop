import { useRef, useState } from 'react'
import { editarProducto } from '../../servers/fetch'

const Edit = ({id, imagen, nombre, precio, descripcion}) => {

    const [inputNombre, setInputNombre] = useState(nombre);//pues si resulta que si se puede editar lo que esta entre parentesis
    const [inputPrecio, setInputPrecio] = useState(precio);
    const [inputImagen, setInputImagen] = useState(imagen);
    const [inputDescripcion, setInputDescripcion] = useState(descripcion);
    const editRef = useRef()

 const btn = useRef()//de donde salio//ok ya entendi de donde salieron esos ref //pero donde esta useref? esta importada

 const show = () =>{

  editRef.current.showModal()

}

const cerrar = () => {

 editRef.current.close()// khe con ese current y ref

}

const editar = () => { //funcion de boton de eliminar

   let nuevoProducto = {

    Imagen: inputImagen,
    Producto: inputNombre,//se creo un cuerpo el cual sera el remplazante
    Precio: inputPrecio,
    Descripcion: inputDescripcion
   }


    editarProducto(id, nuevoProducto)

    alert ("producto editado")


}

  return (

  <>
  <dialog ref={editRef} className="dialog">
  <p>Editar producto</p>

  <p>IMG</p><input value={inputImagen} onChange={(e) => setInputImagen (e.target.value.trim())} type="text" />
  <br />
  <br />
  <br />
  <p>Nombre</p><input value={inputNombre} onChange={(e) => setInputNombre(e.target.value.trim())} type="text" />
  <br />
  <br />
  <br />
  <p>Precio</p><input value={inputPrecio} onChange={(e) => setInputPrecio (e.target.value.trim())} type="text" />
  <br />
  <br />
  <p>Descripcion</p><input value={inputDescripcion} onChange={(e) => setInputDescripcion (e.target.value.trim())} type="text" />
  <br />
  <br />
  <button onClick={cerrar}>cerrar</button>
  <button onClick={() => editar(id, imagen, nombre, precio, descripcion)} ref={btn} id={id}>Cambiar</button>
    </dialog>

 <button className='edit' onClick={show} >Editar</button>
    </>
  )
}

export default Edit
