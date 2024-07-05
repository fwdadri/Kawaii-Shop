import { forwardRef, useRef } from "react"


const ModalEdit = forwardRef (({id}, refr) =>{// el modal/dialog para servir necesita una referecia/ref y pues esta haciendo referencia es al div de las cards, con el forwards ref se pueden compartir referencias

    const cerrar = () => {

        refr.current.close()// khe con ese current y ref

    }
   
    //que hace el useref? es un Hook de React que te permite referenciar un valor que no es necesario para el renderizado.
 
    const refBtn = useRef()
    
     
    return(
        <>
    <dialog ref={refr} className="dialog">
  <p>Editar producto</p>

  <p>IMG</p><input type="text" />
  <br />
  <br />
  <br />
  <p >Nombre</p><input type="text" />
  <br />
  <br />
  <br />
  <p>Precio</p><input type="text" />
  <br />
  <br />
  <p>Descripcion</p><input type="text" />
  <br />
  <br />
  <button onClick={cerrar}>cerrar</button>
  <button onClick={()=>{console.log()}} ref={refBtn} key={id} id={id}>Cambiar</button>

    </dialog>
    </>
    )
})

ModalEdit.displayName = 'modal'

export default ModalEdit
 

