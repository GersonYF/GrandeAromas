import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import OrderTable from '../components/OrderTable';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../slices/orderSlice';

const Ordenes = () => {
  const dispatch = useDispatch();
  const orders= useSelector((state) => state.orders.data);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="container" style={{ minHeight: '350px' }}>
    <div className="button-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <h2>Ordenes</h2>
      <Button variant="outline-primary">Crear Orden</Button>
    </div>
      <div>
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default Ordenes;