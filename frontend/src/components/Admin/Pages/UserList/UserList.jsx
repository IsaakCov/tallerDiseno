import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';

const UserList = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Nombre Usuario', width: 200 },
        { field: 'direccion', headerName: 'Dirección', width: 200 },
        { field: 'email', headerName: 'Correo', width: 200 },
        {
        field: 'status',
        headerName: 'Status',
        width: 120,
        },
        {
        field: 'transaction',
        headerName: 'Transacción',
        width: 160,
        },
        {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <button className="userListEdit">Editar</button>
                <i class="bi bi-trash3"></i>
                </>
            )
        }
        }

    ];
    
    const rows = [
        { id: 1, 
            userName: 'Arachi',
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 2, 
            userName: 'Diewisky', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 3, 
            userName: 'Fer', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 4, 
            userName: 'Isacc', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 5, 
            userName: 'Pedro', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 6, 
            userName: 'Arachi',
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 7, 
            userName: 'Diewisky', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 8, 
            userName: 'Fer', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 9, 
            userName: 'Isacc', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { id: 10, 
            userName: 'Pedro', 
            direccion: 'calle falsa 123',
            email:"example@gmail.com",
            status: "active",
            transaction: "$120.00"
        }
    ];
return (
    <div className="userList">
    <DataGrid
        rows={rows}
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