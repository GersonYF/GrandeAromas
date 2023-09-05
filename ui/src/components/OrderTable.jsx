import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const OrderTable = ({ orders }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Shopping address id</th>
        <th>Payment address id</th>
        <th>Total price</th>
        <th>Estado de Orden</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {orders && orders.length > 0 ? orders.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.user_id}</td>
          <td>{order.shopping_address_id}</td>
          <td>{order.payment_address_id}</td>
          <td>{order.total_price}</td>
          <td>{order.order_status}</td>
          <td>
            <div className="button-container1">
              <Button size="sm" variant="outline-secondary"><i className='bi bi-eye'></i></Button>
            </div>
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan="8">No orders found</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default OrderTable;