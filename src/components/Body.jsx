import '../components/Estilos.css'
//import {useState} from 'react'
//import { addProduct, getProductos } from '../servers/fetch';


const Body= () => {//funcion flecha para indicar que es una funcion

  /*
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

    async function visualizacion(){//funcion para vizualizar datos obtenidos de gettask en la pagina

      const data = await getProductos()//el await es para esperar que se ejecute la funcion anterior
    
      if (data.length === 0 ){// si los dato son 0 muetra e inserta un parrafo en la hoja html
        
        let p =document.createElement("p");
        p.id ="nothing" 
        p.innerHTML= "No existen tareas" ;
        container.appendChild(p); //se inserto la p anterior// div conteiner ya esta definido en html
      } 
        
      for (let i = 0; i < data.length; i++) {//por cada dao agregado al local host se crea una etiqueta
        
        let p =document.createElement("p")
        let div = document.createElement("div");
        let input = document.createElement("input");//se refiere al checkbox
        let trash = document.createElement("img");
        let cantidad = document.getElementById("contador");//cantidad == a contador
    
        p.innerHTML=data[i].task
    
        div.id= "cuadros";
        input.type= "checkbox";//aqui estamos indicndo que el input es un checkbox
        input.id= "check";
        trash.id= "trash";
        trash.src = "http://localhost:1234/borrar.34139a88.png"; //se inserto la src de la pagina wed
        p.id= "list";
    
        container.appendChild(div);
        div.appendChild(input);
        div.appendChild(p);
        div.appendChild(trash);
      }

      */

    return(  
     <>
    <br />
    <br />
    <div className='publicar'>
      <p className='Ppublicar'>Publicar Producto</p>
      <div className='publi_img'></div>
      <br /><br />
      <input className='input_body' type="Nombre" placeholder='Nombre' />
      <br /><br />
      <input className='input_body' type="Precio" placeholder='Precio' />
      <br /><br />
      <textarea className='input_body_descripcion' name="comentarios" rows="10" cols="40"placeholder='Descripcion' />
      <br /><br />
      <button className='btn_body' >Subir Producto</button>
    </div>
    <br />
     <div className='productos_publicados'>

     </div>
     <br />
    <br />
    </> 
    )}
  
export default Body