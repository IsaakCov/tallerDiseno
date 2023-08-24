import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { OrderSuccessfulProvider } from '../Providers/OrderSuccessfulProvider';
import OrderSuccessful from '../Order/OrderSuccessful';
import "./YourOrders.css";

const YourOrders = () => {

    useEffect(() => {
        // Hacer una solicitud GET al servidor para obtener los pedidos del usuario
        axios.get(`http://localhost:3001/api/v1/pedidos/getPedidosByUser/${correoUsuario}`)
            .then(response => {
                setOrders(response.data.pedidos);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Mis pedidos</h1>
            {
                ordersuccesscont && <OrderSuccessful orderid={selectedOrderid} message={`Order ID: ${selectedOrderid}`} />
            }
            <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>N° Orden</th>
                        <th scope='col'>Fecha</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='OrderID'>{order.idPedido}</td>
                                <td data-label='OrderDate'>{order.createdAt}</td>
                                <td data-label='Delivery Status'>
                                    {/* Aquí tu lógica para mostrar el estado */}
                                    {order.Estado}
                                </td>
                                <td data-label='Total'>${order.TotalPedido}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default YourOrders