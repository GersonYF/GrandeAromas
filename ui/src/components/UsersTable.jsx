import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const UserTable = ({ users = [] }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Rol</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {users?.length > 0 ? users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.is_admin ? 'Admin' : user.is_staff ? 'Staff' : 'User'}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <div className="button-container1">
              <Button size="sm" variant="outline-secondary">
                <i className='bi bi-eye'></i>
              </Button>
            </div>
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan="6">No hay usuarios</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default UserTable;
