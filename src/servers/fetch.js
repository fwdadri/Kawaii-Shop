//todos lo fecth se importan
export let addUsuario = async(Gmail, Usuario, Password) => {//es necesario el tarea entre (), le falta el let o const 
 
    try { //porque try
     const response = await fetch("http://localhost:3001/users", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda
       'Content-Type': 'application/json'
      },//esta volviendo el localhost en un jason para poder ser leidos
      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

        Correo: Gmail,
        Nombre: Usuario,
        Contrasena: Password
      })
   });
   

    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

    console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let getUsuarios = async () => { //todos los asyn necesitan un await, un try y catch
  try { 
    const response = await fetch( "http://localhost:3001/users"); // obtenido los datos los local host 
    const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
    return data
   
   } catch (error) { 
    console.log(error);//que tipo de error atrapa
   }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//cada usuario va a tener un task que va a ser un array vacio[]
//todos lo fecth se importan
export let addProduct = async(Imagen, Producto, Precio, Descripcion) => {//es necesario el tarea entre (), le falta el let o const 
 
  try { //porque try
   const response = await fetch("http://localhost:3001/productos", {//llama al api

     method: 'POST',//post empuja/guarda/inserta el contenido
     headers: {//muestra el tipo de contenido que se guarda
     'Content-Type': 'application/json'
    },//esta volviendo el localhost en un jason para poder ser leidos
    body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido
      
      Imagen: Imagen, 
      Producto: Producto,
      Precio: Precio,//se guardan los de la derecha =>
      Descripcion: Descripcion
    })
 });
 
  const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          

  console.log(data)
  } catch(error) {
             
   console.log(error)
  } 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
export let getProductos = async () => { //todos los asyn necesitan un await, un try y catch
  try { 
    const response = await fetch( "http://localhost:3001/productos"); // obtenido los datos los local host 
    const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
    return data

   } catch (error) { 
    console.log(error);//que tipo de error atrapa
   }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let deleteProducto  = async (id) => {//tengo que adaptar la funcion a react y (pasar el parametro del id para ue funcion)?
  try { 
    const response = await fetch( "http://localhost:3001/productos/" + id ,  { // obtenido los datos los local host 
    method: 'DELETE',//post empuja/guarda/inserta el contenido
    headers: {//muestra el tipo de contenido que se guarda
    'Content-Type': 'application/json'
   },//esta volviendo el localhost en un jason para poder ser leidos
   body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido      
})
});
const data = await response.json(); //esperando a que se realice la funcion de conversion anterior   
       
console.log(data)

} catch(error) {   

 console.log(error) 

} 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let editarProducto = async (id) =>{//dos parametros 
try{
  const response = await fetch ("http://localhost:3001/productos/" + id, {//aqui el id identifica cual es que se quiere cambiar
  method: 'PUT',
  headers: { 
    'Content-type': 'application/json'
  },
  
  body: JSON.stringify((newData))// convesion de todo a un string  //body se refiere a todo el contenido//muetra en el api las tareas que ya eatn marcadas
});
const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          
 console.log(data)
} catch(error) {
           
 console.log(error)
} 
}