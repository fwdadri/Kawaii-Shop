import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom"

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='btnDrop'></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><Link to="/about">Acerca de nosotros</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to="/tienda">Tienda</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to="/home">Intinerario</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link >Whatsapp</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link >Whatsapp</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link >Instagram </Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link >Gmail</Link></Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-3">Salir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;