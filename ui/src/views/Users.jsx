import React from 'react';
import '../blogstyles.css';
import Button from 'react-bootstrap/Button';

const Users = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="title">BIENVENIDO A LA TABLA DE USUARIOS</h1>
      </div>
    <div className="button-container">
      <Button variant="outline-primary">Crear Usuario</Button>
    </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Rol</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
            <th>Editar</th>
            <th>Ver</th> {/* Agregamos una nueva columna para el botón "Ver" */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2221986</td>
            <td>Admin</td>
            <td>Juan</td>
            <td>juan_admin@uao.co</td>
            <td>****</td>
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

export default Users;

