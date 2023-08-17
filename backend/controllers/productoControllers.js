const productos = require('../models/productoModel')

// Crear usuario nuevo
const createProducto = async (req, res) => {

    const { Nombre, Descripcion, Precio, Stock, Imagen, Color, Medidas } = req.body;

    //Hacemos una validacion de la obtencion de datos para la API
    if (!Nombre || !Descripcion || !Precio || !Stock || !Imagen || !Color || !Medidas) {
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
        } catch (error) {
            res.status(400).json({ msg: 'Error al obtener producto' });
        }
    }


module.exports = {
    createProducto,
    getAllProductos,
    // updateProducto,
    // deleteProducto
};