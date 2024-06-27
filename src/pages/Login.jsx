import {useState} from 'react'
import { getUsuarios } from '../servers/fetch'
import { Link, useNavigate } from "react-router-dom"
import '../pages/Login.css'
import './home'


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
          
        } 

      }else{
       alert("usuario no registrado")
      }
    
    }else {
     alert("complete los campos vacios")
    }

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Crea una Cuenta</h1>
      <br /><br />
     <label htmlFor="">Gmail</label>
     <br />
     <input type={"text"} value={Gmail_input} onChange={(e) => setGmail_input (e.target.value)} placeholder={'Gmail'} />
     <br /><br />
     <label htmlFor="">Password</label>
     <br />
     <input type={"text"} value={Password_input} onChange={(e) => setPassword_input (e.target.value)} placeholder={'password'} />
     <br /><br />
     <button type='submit'>Entrar Cuenta</button>
    </form>
    <Link to="/register">Ir al Registro</Link>
    </>
  )
}
export default Login
