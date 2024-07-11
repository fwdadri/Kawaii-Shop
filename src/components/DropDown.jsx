
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom"

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
        <Dropdown.Item href="#/action-2"><Link className='dropD' >Whatsapp</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link className='dropD' >Instagram </Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link className='dropD' >Gmail</Link></Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-3"><button className='dropD' to="/"><Link className='dropD' to="/">Salir</Link></button></Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown >
  );
}

export default DropDown;