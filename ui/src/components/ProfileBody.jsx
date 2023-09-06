import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OrderTable from './OrderTable';
import { fetchMyOrders } from '../slices/orderSlice';

const ProfileBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.auth.orders);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch])

  return (
    <Container style={{backgroundColor: "#FFF", paddingTop: "20px", minHeight: '350px'}}>
      <Row>
        <Col md={4}>
          {user ? (
            <>
              <h1>Hola, {user.name}</h1>
              <p>Email: {user.email}</p>
              {/* Display more user info as needed */}
            </>
          ) : (
            <p>No user data available.</p>
          )}
        </Col>
        <Col md={8}>
          <h1>Historial de Pedidos</h1>
          {orders?.length > 0 ? (<OrderTable orders={orders} />) : (<p>No hay pedidos</p>)}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileBody;
