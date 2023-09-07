import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import SubscriptionTable from '../components/SubscriptionTable';
import { fetchSubscriptions } from '../slices/subscriptionSlice';
import { useSelector, useDispatch } from 'react-redux';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state) => state.subscriptions.data);

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  return (
    <div className="container" style={{ minHeight: '350px' }}>
    <div className="button-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <h2>Suscripciones</h2>
      <Button variant="outline-primary">Crear Suscripción</Button>
    </div>
      <div>
        <SubscriptionTable subscriptions={subscriptions} />
      </div>
    </div>
  );
};

export default Subscriptions;