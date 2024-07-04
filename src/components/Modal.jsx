import Modal from "../components/Body";

function app() {
const[isModalOpen, setisModalOpen]=false;
    
    return ( 
      <div className="app">
        <button onClick={() => setisModalOpen(false)}> open </button>
        <Modal isOpen={isModalOpen} closeModal={()=> setisModalOpen(false)} ></Modal>
      </div>
    );
    
}

export default app;