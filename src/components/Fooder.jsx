import '../components/Estilos.css'
import img1 from '../img/logokawaii.jpg'
import google from '../img/gmail.png'
import ins from '../img/instagram.png'
import what from '../img/whatsapp.png'

const  Footer= () => {//funcion flecha para indicar que es una funcion

    return(  
     <>
     <br /><br /> 
     <div>
        <footer className='fooder'> 

          <div className='fooder-in'>
            
            <p className='fooder-in-c'>Contactanos</p>
            <p className='fooder-in-p'><img src={what} alt="" className='fooder-img' />   84280351</p>
            <p className='fooder-in-p'><img src={ins} alt="" className='fooder-img' />  Kawai_iGift_Shop</p>
            <p className='fooder-in-p'> <img src={google} alt="" className='fooder-img' />  KawaiiGiftShop@gmail.com</p>
        
          </div>

          <div className='fooder2'><br /><br />Términos y condiciones<br />Política de privacidad<br />Política de cookies <br /> Notificaciones de Copyright<br />Configuracion de Cookies <br />Copyright © 2010-2024 Kawaii Gift Shop Todos los derechos reservados. </div>
      
          <div className='fooder'><img src={img1} alt="" className="logo-foo" /></div>  
      
        </footer> 
     </div>
    </> 
  )}
  
export default Footer