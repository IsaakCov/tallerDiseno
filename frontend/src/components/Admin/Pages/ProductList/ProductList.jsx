import React, { useState } from 'react'
import "./productlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "./ProductRows"
import { Link } from "react-router-dom"


const ProductList = () => {

        const [data, setData]=useState(productRows);
        const handleDelete = (id) => {
            setData(data.filter((item) => item.id == id));
        };
        

        const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Producto', width: 200 },
        { field: 'medidas', headerName: 'Medidas', width: 200 },
        { field: 'price', headerName: 'Precio', width: 200 },
        ];
    return (
        <div className="productList">
        <DataGrid
        rows={productRows}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 10 },
        },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
    />
    </div>
)
}

export default ProductList