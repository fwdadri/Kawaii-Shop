import { useRef, useState } from 'react'

const Ver = ({imagen, nombre, precio, descripcion}) => {

    const [inputNombre] = useState(nombre);//pues si resulta que si se puede editar lo que esta entre parentesis
    const [inputPrecio] = useState(precio);
    const [inputImagen] = useState(imagen);
    const [inputDescripcion] = useState(descripcion);
    const editRef = useRef()

//ok ya entendi de donde salieron esos ref //pero donde esta useref? esta importada

  const show = () =>{

   editRef.current.showModal()

  }

  const cerrar = () => {

    editRef.current.close()// khe con ese current y ref
    
  }

  
  return (

  <>
  <dialog ref={editRef} className="dialog2">
  <br />    

  <h5 className='ti'>Kawaii Gift Shop</h5>

  <br /> 
  <br />
  <img src={inputImagen} className='imver'/>
  <br />

 <div className='viendo'>

  <p className='dia2'>{inputNombre}</p> 
  <br />
  <p className='dia2'>{inputPrecio}</p>
  <br />
  <p className='dia2'>{inputDescripcion}</p>
  <br /><br /> 
  <button className='edibtn2'>Añadir a Canasta</button>

   </div>    <button className='btnclose2' onClick={cerrar}>cerrar</button>
  </dialog>

   <button className='btnEli' onClick={show} >Ver</button>

    </>

  )
}

export default Ver
