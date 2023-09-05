import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from '../components/UsersTable';
import { fetchUsers } from '../slices/userSlice';
import { fetchOrders } from '../slices/orderSlice';
import OrderTable from '../components/OrderTable';
import { fetchProducts } from '../slices/productSlice';
import ProductTable from '../components/ProductsTable';
import { fetchSubscriptions } from '../slices/subscriptionSlice';
import SubscriptionTable from '../components/SubscriptionTable';

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const orders= useSelector((state) => state.orders.data);
  const products = useSelector((state) => state.products.data);
  const subscriptions = useSelector((state) => state.subscriptions.data);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchOrders());
    dispatch(fetchProducts());
    dispatch(fetchSubscriptions());
  }, [dispatch]);


  return (
    <Container style={{minHeight: '350px'}}>
      <Row style={{
        marginTop: '5rem',
      }}>
        <Col md={4}>
          grafico 1
        </Col>
        <Col md={4}>
          grafico 2
        </Col>
        <Col md={4}>
          grafico 3
        </Col>
      </Row>
      <Row style={{
        marginTop: '5rem',
      }}>
        <Col md={4}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h3>Usuarios</h3>
            <Button variant="outline-primary" href="/dashboard/usuarios" size="sm">Ver más</Button>
          </div>
          <UserTable users={users} />
        </Col>
        <Col md={8}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h3>Ordenes de compra</h3>
            <Button variant="outline-primary" href="/dashboard/ordenes" size="sm">Ver más</Button>
          </div>
          <OrderTable orders={orders} />
        </Col>
      </Row>
      <Row style={{
        marginTop: '5rem',
      }}>
        <Col md={6}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h3>Productos</h3>
            <Button variant="outline-primary" href="/dashboard/productos" size="sm">Ver más</Button>
          </div>
          <ProductTable products={products} />
        </Col>
        <Col md={6}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h3>Suscripciones</h3>
            <Button variant="outline-primary" href="/dashboard/suscripciones" size="sm">Ver más</Button>
          </div>
          <SubscriptionTable subscriptions={subscriptions} />
        </Col>
      </Row>
    </Container>
  )
};

export default Dashboard;