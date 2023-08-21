import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../UserList/UserRows"

const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        console.log(data);
    };
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Nombre Usuario', width: 200 },
        { field: 'direccion', headerName: 'Dirección', width: 200 },
        { field: 'email', headerName: 'Correo', width: 200 },
        {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/AdminDashboard/User/"+ params.row.id}>
                <button className="userListEditAdmin">Editar</button>
                </Link>

                    <i class="bi bi-trash3" onClick={()=>handleDelete(params.row.id)}></i>
                </>
            )
        }
        }

    ];
    
return (
    <div className="userListAdmin">
    <DataGrid
        rows={data}
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

export default UserList