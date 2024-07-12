
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom"
import salir from "../img/salida.png"

function DropDown() {

const boostrapStyle =  {

 height: "30px",  
 width: "40px",
 backgroundColor: " rgb(235, 147, 232)",
 color: "white",
}

  const StyleDropdown =  {

  backgroundColor:"rgb(170, 235, 248)",
  
  }
  

  return (
    <Dropdown >
      <Dropdown.Toggle  variant="success" style={boostrapStyle} id="dropdown-basic"   className='btnDrop '></Dropdown.Toggle>

      <Dropdown.Menu style={StyleDropdown} className='drop'>
        <Dropdown.Item href="#/action-1"><Link className='dropD' to="/about">Acerca de nosotros</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link className='dropD' to="/tienda">Tienda</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link className='dropD' to="/home">Intinerario</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><a className='dropD' href="https://www.whatsapp.com/?lang=es_LA">Whatsapp</a></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><a className='dropD' href="https://www.instagram.com/adriana_cat_uwu/">Instagram</a></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><a className='dropD' href="https://www.google.com/intl/es/gmail/about/">Gmail</a></Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-3"><Link className='dropD' to="/">Salir <img src={salir} className='exit'/></Link></Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown >
  );
}

export default DropDown;