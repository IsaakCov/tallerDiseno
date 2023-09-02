const productos = require('../models/productoModel')

// Crear usuario nuevo
const createProducto = async (req, res) => {

    const { Nombre, Descripcion, Precio, Stock, Imagen, Color, Medidas } = req.body;

    //Hacemos una validacion de la obtencion de datos para la API
    if (!Nombre || !Descripcion || !Precio || /* !Stock || */ !Imagen || !Color || !Medidas) {
        return res.status(400).json({ msg: 'Falto ingresar informacion' })
    }
    try {
        await productos.create({
            Nombre: Nombre,
            Descripcion: Descripcion,
            Precio: Precio,
            Stock: Stock,
            Imagen: Imagen,
            Color: Color,
            Medidas: Medidas
        });
        res.status(200).json({ msg: 'Producto registrado con exito' })
    } catch (error) {
        res.status(400).json({ msg: "Algo salio mal", error })
        console.log('error', { msg: error });
    }
}

//Obtener todos los productos

    const getAllProductos = async (req, res) => {
        try {
            const productosList = await productos.findAll();
            res.status(200).json({ productos : productosList });
        } catch (error) {
            res.status(400).json({ msg: 'Error al obtener producto' });
            console.log(error);
        }
    }

    //Actualizar informacion
    const updateProductos = async (req, res) =>{
        // Recordar que req params se obtiene desde la ruta a la hora de hacer la consulta con la API
        const { idProducto } = req.params;
        const { Nombre, Descripcion, Precio, Stock, Imagen, Color, Medidas } = req.body;

        try {
            const producto = await productos.findOne({ where: {idProducto: idProducto }});
            if (!producto){
                return res.status(404).json({ msg:'Producto no encontrado'});
            }

            //Actualizar campos si se proporcionan en el body
            if (Nombre) producto.Nombre = Nombre;
            if (Descripcion) producto.Descripcion = Descripcion;
            if (Precio) producto.Precio = Precio;
            if(Stock) producto.Stock = Stock;
            if(Imagen) producto.Imagen = Imagen;
            if(Color) producto.Color = Color;
            if(Medidas) producto.Medidas = Medidas;
        
        //Validamos la instancia y, de ser valida, la gaurda en la DB
        await producto.save();
        res.status(200).json({ msg:'Producto Actualizado exitosamente'});
    } catch(error) {
        res.status(200).json({msg: 'Error al actualizar producto', error: error.message});
    }
}

    //Borrar Producto

    const deleteProducto = async (req, res) => {
        const { idProducto} = req.params;

        try {
            const producto = await productos.findOne({ where:{ idProducto: idProducto}});
            if(!producto){
                return res.status(404).json({msg: 'Producto no encontrado'});
            }

            await producto.destroy();
            res.status(200).json({msg: 'Producto eliminado'});
        }catch (error){
            res.status(400).json({msg: 'Error al eliminar el producto', error: error.message});
        }
        }
        
module.exports = {
    createProducto,
    getAllProductos,
    updateProductos,
    deleteProducto
};