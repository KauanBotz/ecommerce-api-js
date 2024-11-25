import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Pedidos</h1>
      {orders.length === 0 ? (
        <p>Nenhum pedido disponível.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Pedido ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Cliente: {order.User?.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminDashboard;
