import React from 'react';
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';

const CartList = ({ items, onRemoveItem }) => {
  // Calculate the total price of the items in the cart
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Container style={{
      background: 'var(--bs-white)',
      padding: '3em 1em',
      position: 'fixed',
      right: '0',
      zIndex: '1000',
      width: '500px',
      boxShadow: '#666 -4px 2px 10px'
    }}>
      <h4 style={{marginBottom: '1rem'}}>Mi Carrito</h4>
      <ListGroup>
        {items.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>{item.name}</Col>
              <Col>Cantidad: {item.quantity}</Col>
              <Col>${item.price.toFixed(2)}</Col>
              <Col>
                <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                  <i class="bi bi-dash-circle-dotted"></i>
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* Footer section with total and proceed button */}
      <ListGroupItem style={{
        marginTop: '2em',
      }}>
        <Row>
          <Col>
            <strong>Total: ${totalPrice.toFixed(2)}</strong><br/>
            <Button variant="success" href="/checkout" style={{marginTop: '1rem'}}>
              Ir a pagar
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </Container>
  );
}

export default CartList;
