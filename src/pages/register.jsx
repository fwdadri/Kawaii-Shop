import { addUsuario } from '../servers/fetch';
import { getUsuarios } from '../servers/fetch';
//funciones personales sin llaves, funcion importada de internet van con llaves{}
import {useState} from 'react'//porque sale React en rojo? con estas nuevas tecnologias ya no es necesario usarlo
//sse esta instalando una librera de bustrap, el profe sule usarlo con el form de bostrap
import { Link } from "react-router-dom"
import '../pages/Register.css'


const Register = () => {
 //aun no entiendo porque son necesarios
  const [Gmail, setGmail]= useState();//se esta definiendo el valor gmail
  const [Usuario, setUsuario]= useState();//useState permite manipular los estados de las variables
  const [Password, setPassword]= useState()//el usuario iniciar se setea sin nada
  //se define el estado de la variable
  //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
   // addUsuario(Gmail, Usuario, Password)
   // alert("registro exitoso")
  //}
  const handleSubmit = async (event) => {

    event.preventDefault();

    if (Gmail != null && Usuario != null && Password != null) { // null puede incluir unun espacio vacio
     
      const usuarios = await getUsuarios()// como traigo la data del api?Tenia qu crear un jason server//ifgual como hago para recorrer la lista en el local host?

    
      let encontrado = usuarios.find((encontrado) => encontrado.Correo === Gmail);
    
      if (encontrado) {

       alert(" el ususario ya esta registrado")

      }else{
       console.log("hola");
       addUsuario(Gmail, Usuario, Password)
       alert("registro exitoso")

      }

    }else{
      alert("complete los espacios vacios")
    }
  }

  //un complemento solo llena la carencia
//para que el on sumit, esta en la espera del evento
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Crea una Cuenta</h1>
      <br /><br />
     <label htmlFor="">Gmail</label>
     <br />
     <input type={"text"} value={Gmail} onChange={(e) => setGmail (e.target.value.trim())} placeholder={'Gmail'} />
     <br /><br />

     <label htmlFor="">User</label>
     <br />
     <input type={"text"} value={Usuario} onChange={(e) => setUsuario (e.target.value.trim())} placeholder={'user'} />
     <br /><br />

     <label htmlFor="">Password</label>
     <br />
     <input type={"text"} value={Password} onChange={(e) => setPassword (e.target.value.trim())} placeholder={'password'} />
     <br /><br />
     
     <button type='submit'>Crear Cuenta</button>

     <Link to="/">Ir a cuenta</Link>

    </form>
    </>
  )
}
//cada que se ejecuta el enter se activa el evento summit
//rederizar?
//donde realizar la funciones? recomendado crear una carpeta en la carpeta src y crear hoja fetch
//esta bien usar el fetch? sip
//porque los valores salen rojos y el form tambien? no se se esta definiendo los valores

//como hacer saber que la cuenta exite?
//como crear cuentas unicas?

export default Register