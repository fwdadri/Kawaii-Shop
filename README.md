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