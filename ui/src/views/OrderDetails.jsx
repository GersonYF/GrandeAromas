import React, { useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderById } from '../slices/orderSlice';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.orders.selectedOrder);

  const { id: orderId } = useParams();

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch, orderId]);

  if (!order) {
    return <div>Cargando...</div>;
  }

  return (
    <Container style={{ padding: '2rem' }}>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src='/logo.png' />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>Detalles del Pedido</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <p><strong>ID del Pedido:</strong> {order?.id}</p>
                  <p><strong>Nombre del Usuario:</strong> {order?.User?.name}</p>
                  <p><strong>Email del Usuario:</strong> {order?.User?.email}</p>
                  <p><strong>Dirección de Envío:</strong> {order?.ShoppingAddress?.address}, {order?.ShoppingAddress?.city}, {order?.ShoppingAddress?.country}</p>
                  <p><strong>Dirección de Pago:</strong> {order?.PaymentAddress?.address}, {order?.PaymentAddress?.city}, {order?.PaymentAddress?.country}</p>
                </Col>
                <Col>
                  <p><strong>Total:</strong> ${order?.total_price?.toFixed(2)}</p>
                  <p><strong>Estado:</strong> {order?.order_status}</p>
                  <p><strong>Creado:</strong> {new Date(order?.created_at).toLocaleString()}</p>
                  <p><strong>Actualizado:</strong> {new Date(order?.updated_at).toLocaleString()}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetails;
