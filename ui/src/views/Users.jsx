import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import UserTable from '../components/UsersTable';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../slices/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container" style={{ minHeight: '350px' }}>
    <div className="button-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <h2>Usuarios</h2>
      <Button variant="outline-primary">Crear Usuario</Button>
    </div>
      <div>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default Users;

