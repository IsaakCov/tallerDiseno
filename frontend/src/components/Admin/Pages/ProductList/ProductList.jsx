import React, { useState, useEffect} from 'react'
import "./productlist.css"
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const ProductList = () => {

        const [data, setData]=useState([]);
        
        useEffect(() => {
            fetchData();
        }, []);
    
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/v1/productos/getAllProductos");
                
                if (Array.isArray(response.data.productos)) {
                    setData(response.data.productos);
                } else {
                    console.error("La respuesta no contiene un arreglo:", response.data.productos);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Manejo del error
            }
        };
    
        if (!Array.isArray(data) || data.length === 0) {
            console.log(data);
            return <p>Loading...</p>;
             // Otra acción que consideres apropiada mientras cargan los datos
        }


        const columns = [
        { field: 'idProducto', headerName: 'ID', width: 300 },
        { field: 'Nombre', headerName: 'Producto', width: 200 },
        { field: 'Medidas', headerName: 'Medidas', width: 150 },
        { field: 'Color', headerName: 'Color', width: 70 },
        { field: 'Precio', headerName: 'Precio', width: 70 }
        ];

    return (
        <div style={{ height: 400, width: '80%' }}>
    <DataGrid 
    rows={data} 
    getRowId={(data) => data.idProducto} 
    columns={columns} 
    pageSize={5} />
    </div> 
    )
}

export default ProductList