import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { OrderSuccessfulProvider } from '../Providers/OrderSuccessfulProvider'
import OrderSuccessful from '../Order/OrderSuccessful'
import "./YourOrders.css"

const YourOrders = () => {

    const data = [
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Pendiente',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'Confirmado',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Listo para enviar',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'En despacho',
            total: 100
        },
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Entregado',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'Anulado',
            total: 1600
        }
       
    ]
    const [selectedorderid] = useState(0)
    const [ordersuccesscont] = useRecoilState(OrderSuccessfulProvider)
    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Mis pedidos</h1>
            {
                ordersuccesscont && <OrderSuccessful orderid={selectedorderid} message={`Order ID: ${selectedorderid}`} />
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
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='OrderID'>{item.id}</td>
                                <td data-label='OrderDate'>{item.date}</td>
                                <td data-label='Delivery Status'>
                                    <div>
                                        {item.status == 'Entregado' && <span  className="entregado bi bi-check-circle-fill"></span>}
                                        {item.status == 'Pendiente' && <span className="pendiente bi bi-bag"></span>}
                                        {item.status == 'Anulado' && <span className="anulado bi bi-x-circle"></span>}
                                        {item.status == 'Confirmado' && <span className="confirmado bi bi-bag-check"></span>}
                                        {item.status == 'Listo para enviar' && <span className="enviar bi bi-box-seam"></span>}
                                        {item.status == 'En despacho' && <span className="despacho bi bi-truck"></span>}
                                        {item.status}
                                    </div>
                                </td>
                                <td data-label='Total'>${item.total}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default YourOrders