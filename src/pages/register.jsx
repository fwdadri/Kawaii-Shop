import { addUsuario,getUsuarios  } from '../servers/fetch';

//funciones personales sin llaves, funcion importada de internet van con llaves{}
import {useState} from 'react'//porque sale React en rojo? con estas nuevas tecnologias ya no es necesario usarlo
//sse esta instalando una librera de bustrap, el profe sule usarlo con el form de bostrap
import { Link } from "react-router-dom"
import '../pages/Register.css'
import img1 from '../img/logokawaii.jpg'


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
    

<div className='imgfondo'>
    
<div className='form'>

<div className='img-register'><img src={img1} alt="" className="logo" /></div> 

<form className='register-form' onSubmit={handleSubmit}>
  
<h1 className='tex-register'>Crea una Cuenta</h1>

 <label className='label-register1' htmlFor="">Gmail</label>
 <input type={"text"} className='input-register' value={Gmail} onChange={(e) => setGmail (e.target.value.trim())} placeholder={'Gmail'} />
 <br />

 <label className='label-register2' htmlFor="">User</label>
 <input type={"text"} className='input-register' value={Usuario} onChange={(e) => setUsuario (e.target.value.trim())} placeholder={'user'} />
 <br />

 <label className='label-register3' htmlFor="">Password</label>
 <input type={"text"} className='input-register' value={Password} onChange={(e) => setPassword (e.target.value.trim())} placeholder={'password'} />
 <br /><br />
 
 <button className='btn-register' type='submit'>Crear Cuenta</button>
  <br />
 <Link className='register-link' to="/">Ir a cuenta</Link>

</form>
</div>
    </div>
       

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