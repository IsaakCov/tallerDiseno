import React, { useState } from 'react'
import './orderlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { orderRows } from "../OrderList/orderRows"

const OrderList = () => {
    const [data, setData] = useState(orderRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id == id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Nombre Usuario', width: 200 },
        { field: 'detail', headerName: 'Detalle', width: 200 },
        { field: 'price', headerName: 'Monto', width: 200 },
        {
        field: 'status',
        headerName: 'Status',
        width: 120,
        }

    ];

return (
    <div className="productList">
        <DataGrid
        rows={orderRows}
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

export default OrderList