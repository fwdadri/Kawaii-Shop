# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



    const editarProducto = async () => {

    if (!nombre.trim() || !descripcion.trim() || !precio.trim()) return; EDITADO  

    try {
      const productoEditado = { nombre, descripcion, precio };
      await ProductsPUT(idEditando, productoEditado);
      obtenerProductos();
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setModoEdicion(false);
      setIdEditando(null);
    } catch (error) {

      console.error('Error al editar producto:', error);
    }
  };
  const handleAgregarEditar = (e) => {
    e.preventDefault();
    if (modoEdicion) {
      editarProducto();
    } else {
      agregarProducto();
    }
  };
  const handleEditar = (producto) => {
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setModoEdicion(true);
    setIdEditando(producto.id);
  };


  "Luckiest Guy", cursive;


          <label htmlFor="">Cambiar IMG</label>
          <input type="text" placeholder='text' value={Imagen} onChange={(e) => setImagen (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Nombre</label>
          <input type="text" placeholder='text' value={Nombre} onChange={(e) => setNombre (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Precio</label>
          <input type="text" placeholder='text' value={Precio} onChange={(e) => setPrecio (e.target.value.trim())}/>
          <br />
          <label htmlFor="">Cambiar Descripcion</label>
          <input type="text" placeholder='descripcion' value={Descripcion} onChange={(e) => setDescripcion (e.target.value.trim())}/>

              {<Button variant="primary"  onClick={() => cargar(producto.id) }>Editar</Button>}