import {useState} from 'react'
import { getUsuarios } from '../servers/fetch'
import { Link, useNavigate } from "react-router-dom"
import '../pages/Login.css'
import './home'
import img1 from '../img/logokawaii.jpg'


const Login = () => {

  const [Gmail_input, setGmail_input]= useState();//se esta definiendo el valor gmail
  const [Password_input, setPassword_input]= useState()//el usuario iniciar se setea sin nada
  const navigate = useNavigate()

  const handleSubmit = async (event) => {

    event.preventDefault();


    if (Gmail_input != null && Password_input != null) {

     const usuarios = await getUsuarios()// como traigo la data del api?Tenia qu crear un jason server//ifgual como hago para recorrer la lista en el local host?

      let encontrado = usuarios.find((encontrado) => encontrado.Correo === Gmail_input);
    
      if (encontrado) {

        if (encontrado.Contrasena == Password_input) {
        
          alert("Iniciando seccion")
          navigate("/home")
          
        } else{
          alert("contraseña o gmail incorrcto")
        }

      }else{
       alert("usuario no registrado")
      }
    
    }else {
     alert("complete los campos vacios")
    }

  }

  return (

    <body className='colorrosa'>
      <div className='form '>
    
    <div className='img-login'><img src={img1} alt="" className="logo" /></div> 

    <form className='login-form' onSubmit={handleSubmit}>

    <h1 className='tex-login'>Entrar a Cuenta</h1>
    <br />

     <label className='label-login1' htmlFor="">Gmail</label>
     <input type={"text"} className='input-login' value={Gmail_input} onChange={(e) => setGmail_input (e.target.value)} placeholder={'Gmail'} />
     <br />

     <label className='label-login2' htmlFor="">Password</label>
     <input type={"text"} className='input-login' value={Password_input} onChange={(e) => setPassword_input (e.target.value)} placeholder={'password'} />
     <br />

     <button className='btn-login' type='submit'>Entrar Cuenta</button>
     <br />

     <Link className='login-link' to="/register">Ir al Registro</Link>

    </form>
    </div>
    </body>
    
  )
}
export default Login
