import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const SubscriptionTable = ({ subscriptions }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Usuario ID</th>
        <th>Nombre</th>
        <th>Descuento</th>
        <th>Unidad de Descuento</th>
        <th>Fecha de Inicio</th>
        <th>Fecha de Fin</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {subscriptions && subscriptions.length > 0 ? subscriptions.map(subscription => (
        <tr key={subscription.id}>
          <td>{subscription.id}</td>
          <td>{subscription.user_id}</td>
          <td>{subscription.name}</td>
          <td>{subscription.discount}</td>
          <td>{subscription.discount_unit}</td>
          <td>{new Date(subscription.start_date).toLocaleDateString()}</td>
          <td>{new Date(subscription.end_date).toLocaleDateString()}</td>
          <td>
            <div className="button-container1">
              <Button size="sm" variant="outline-secondary"><i className='bi bi-eye'></i></Button>
            </div>
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan="9">No hay suscripciones disponibles</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default SubscriptionTable;
