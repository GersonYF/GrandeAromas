import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Button, Form, Col } from 'react-bootstrap';
import TableProduct from '../components/TableProduct';
import { setPaymentAddress, setShippingAddress } from '../slices/cartSlice';
import { createNewOrder } from '../slices/orderSlice';
import { useNavigate } from 'react-router-dom';

function AddressCheckout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState('products');  // 'products' or 'address'
  const user = useSelector((state) => state.auth.user);
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  const cartItems = useSelector((state) => state.cart.items);
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const paymentAddress = useSelector((state) => state.cart.paymentAddress);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Dispatch action to save the shipping address and payment address (assuming they are the same in this scenario)
      const address = {
        name: form.validationCustom01.value,
        address: form.validationCustom02.value,
        neighborhood: form.validationCustom03.value,
        city: form.validationCustom04.value,
        department: form.validationCustom05.value,
        zip_code: form.validationCustom06.value,
      };
      dispatch(setShippingAddress(address));
      dispatch(setPaymentAddress(address));

    }

    setValidated(true);
    setStep('products');
  };

  const handlePayment = async () => {
    console.log("USER", user)
    if (user) {
      await dispatch(createNewOrder({ user_id: user.id, products: cartItems, shopping_address: shippingAddress, payment_address: paymentAddress }));
      // You might want to navigate to a confirmation page or another page after the order is created
      navigate(`/checkout/orden/${selectedOrder.id}`);
    } else {
      console.error("User not found in state");
      // Handle error, maybe redirect to login or show a message
    }
  };

  

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isShippingAddressEmpty = !shippingAddress?.name || !shippingAddress?.address || !shippingAddress?.neighborhood || !shippingAddress?.city || !shippingAddress?.department || !shippingAddress?.zip_code;
  const isPaymentAddressEmpty = !paymentAddress?.name || !paymentAddress?.address || !paymentAddress?.neighborhood || !paymentAddress?.city || !paymentAddress?.department || !paymentAddress?.zip_code;

  const isAddressEmpty = isShippingAddressEmpty || isPaymentAddressEmpty;

  return (
    <Container>
      {step === 'products' &&(
        <Row>
          <h2 style={{ margin: '2rem 0' }}>Confirmación listado de productos</h2>
          <TableProduct />
          <h5 style={{margin: '2rem 0'}}>Total: ${total.toFixed(2)}</h5>
          {isAddressEmpty && (<Button onClick={() => setStep('address')} className="mt-3">
            Continuar para añadir dirección
          </Button>)}
          {!isAddressEmpty && (<Button onClick={() => setStep('payment')} className="mt-3">
            Pagar
          </Button>)}
        </Row>
      )}
      {step === 'address' && (
        <Row>
          <h2 style={{ margin: '2rem 0' }}>Seleccionar Dirección</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" placeholder="Nombre" />
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Dirección</Form.Label>
                <Form.Control required type="text" placeholder="Dirección" />
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Barrio</Form.Label>
                <Form.Control type="text" placeholder="Barrio" required />
                <Form.Control.Feedback type="invalid">Por favor ingrese un barrio válido.</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom04">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ciudad" required />
                <Form.Control.Feedback type="invalid">Por favor ingrese una ciudad válida.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom05">
                <Form.Label>Departamento</Form.Label>
                <Form.Control type="text" placeholder="Departamento" required />
                <Form.Control.Feedback type="invalid">Por favor ingrese un departamento válido.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom06">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control type="text" placeholder="Código Postal" required />
                <Form.Control.Feedback type="invalid">Por favor ingrese un código postal válido.</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="me-3">Enviar dirección</Button>
            <Button variant="secondary" onClick={() => setStep('products')}>Regresar a los productos</Button>
          </Form>
        </Row>
      )}
      {step === 'payment' && (
        <Row>
          <h2 style={{ margin: '2rem 0' }}>Confirmación de pago</h2>
          <Col md={12} style={{marginBottom: '2rem'}}><TableProduct /></Col>
          {shippingAddress && (
            <Col md={6}>
              <h4>Confirmación Dirección de Envío:</h4>
              <h5>Nombre: {shippingAddress.name}</h5>
              <h5>Dirección de envío: {shippingAddress.address}</h5>
              <h5>Barrio: {shippingAddress.neighborhood}</h5>
              <h5>Ciudad: {shippingAddress.city}</h5>
              <h5>Departamento: {shippingAddress.department}</h5>
              <h5>Código Postal: {shippingAddress.zip_code}</h5>
              <h5>País: {shippingAddress.country}</h5>
            </Col>
          )}

          {
            paymentAddress && (
              <Col md={6}>
                <h4>Confirmación Dirección de Pago:</h4>
                <h5>Nombre: {paymentAddress.name}</h5>
                <h5>Dirección de envío: {paymentAddress.address}</h5>
                <h5>Barrio: {paymentAddress.neighborhood}</h5>
                <h5>Ciudad: {paymentAddress.city}</h5>
                <h5>Departamento: {paymentAddress.department}</h5>
                <h5>Código Postal: {paymentAddress.zip_code}</h5>
                <h5>País: {paymentAddress.country}</h5>
              </Col>
            )
          }

          <Col md={12} className='text-center'  style={{marginTop: '2rem'}}>
            <Button onClick={handlePayment} className="mt-3">
              Confirmar Pago
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AddressCheckout;
