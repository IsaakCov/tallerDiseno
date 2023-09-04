import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from 'recoil';
import { OrderSuccessfulProvider } from '../Providers/OrderSuccessfulProvider';
import OrderSuccessful from '../Order/OrderSuccessful';
import "./YourOrders.css";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const YourOrders = () => {
  const [pedidos, setPedidos] = useState([]);
  const correoUsuario = localStorage.getItem("Correo");
  const [selectedOrderId] = useState(0);
  const [orderSuccessCont] = useRecoilState(OrderSuccessfulProvider);

  useEffect(() => {
    const fetchPedidosByUser = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/pedidos/getPedidosByUser/${correoUsuario}`);
        setPedidos(response.data.pedidos);
      } catch (error) {
        console.error("Error al obtener los pedidos del usuario:", error);
      }
    };

    if (correoUsuario) {
      fetchPedidosByUser();
    }
  }, [correoUsuario]);

  // Función para obtener la clase CSS según el estado del pedido
  const getStatusClass = (status) => {
    switch (status) {
      case 'ENTREGADO':
        return 'entregado bi bi-check-circle-fill';
      case 'PENDIENTE':
        return 'pendiente bi bi-bag';
      case 'ANULADO':
        return 'anulado bi bi-x-circle';
      case 'CONFIRMADO':
        return 'confirmado bi bi-bag-check';
      case 'LISTO PARA ENVIAR':
        return 'enviar bi bi-box-seam';
      case 'ENVIADO':
        return 'despacho bi bi-truck';
      default:
        return '';
    }
  };

  // Función para mostrar los detalles del pedido cuando se hace clic en una fila
  const showOrderDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setOrderSuccessCont(true);
  };

  return (
    <div className='yourorders'>
      <h1 className='mainhead1'>Mis pedidos</h1>
      {orderSuccessCont && <OrderSuccessful orderid={selectedOrderId} message={`Order ID: ${selectedOrderId}`} />}
      <table className='yourOrdersTable'>
        <thead>
          <tr>
            <th scope='col'>N° Orden</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Status</th>
            <th scope='col'>Total</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.idPedido} onClick={() => showOrderDetails(pedido.idPedido)}>
              <td data-label='OrderID'>{pedido.idPedido}</td>
              <td data-label='OrderDate'>{new Date(pedido.createdAt).toLocaleDateString()}</td>
              <td data-label='Delivery Status'>
                <div>
                  <span className={getStatusClass(pedido.Estado)}></span>
                  {pedido.Estado}
                </div>
              </td>
              <td data-label='Total'>${pedido.TotalPedido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrders