# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





      const [Imagen, setImagen]= useState()
      const [Nombre, setNombre]= useState();//se esta definiendo el valor gmail
      const [Precio, setPrecio]= useState();//useState permite manipular los estados de las variables
      const [Descripcion, setDescripcion]= useState()
 
      //el usuario iniciar se setea sin nada
      const [Productos, setProductos] = useState([])
      //se define el estado de la variable
      //const boton = function boton(){//porque se puse async? es assyncronica?no lo es  y se quito el async porque ya se esta usando en post data
       // addUsuario(Gmail, Usuario, Password)
       // alert("registro exitoso")
      //}
      let subir = async() => {
  
          if (Imagen == null &&Nombre== null && Precio == null && Descripcion == null) { // null puede incluir unun espacio vacio

             alert("Complete los espacios vacios")

          }   alert("Publicacion exitosa")
              await addProduct(Imagen, Nombre, Precio, Descripcion)
              
              setImagen('')
              setDescripcion('')
              setPrecio('')//forma correcta de vaciar inputs
              setNombre('')
              setCategoria('')
              setUpdate(update+1)//el mas 1 actualiza el state

          }
          useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

            const mer = async () => {
              const data = await getProductos();
               setProductos(data)
             }
            mer() //una vez subido el codigo  se actualiza el estado con el update par que se muestre de una vez
           }, [update]);




                 useEffect(() => {// un use efect no puede ir dentro/ declarados dentro de funciones

       const mer = async () => {
         const data = await getProductos();
          setProductos(data)
        }
       mer() //una vez subido el codigo  se actualiza el estado con el update par que se muestre de una vez
      }, [update]);