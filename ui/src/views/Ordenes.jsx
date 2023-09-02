import React from 'react';
import '../blogstyles.css';
import Button from 'react-bootstrap/Button';

const Ordenes = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="title">BIENVENIDO A LA TABLA DE ORDENES</h1>
      </div>
    <div className="button-container">
      <Button variant="outline-primary">Crear Orden</Button>
    </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Shopping address id</th>
            <th>Payment address id</th>
            <th>Total price</th>
            <th>Estado de Orden</th>
            <th>Editar</th>
            <th>Ver</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100823</td>
            <td>2221986</td>
            <td>1119928</td>
            <td>******</td>
            <td>50000</td>
            <td>En preparación</td>
            <td>
              <div className="button-container1">
                <Button size="sm" variant="outline-primary">Editar</Button>
              </div>
            </td>
            <td>
              <div className="button-container1">
                <Button size="sm" variant="outline-secondary">Ver</Button>
              </div>
            </td>
          </tr>
          {/* ... otras filas ... */}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Ordenes;