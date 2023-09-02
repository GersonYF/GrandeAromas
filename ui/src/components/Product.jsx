import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ product, onAddToCart }) => {
  console.log(product);

  return (
    <Card style={{ width: '18rem', margin: '0 10px' }}>
      <Card.Img variant="top" src='/logo.png' />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <p>{product?.ProductCategory?.name}</p>
          <p className="Price">${product.price}</p>
          <p>{product.description}</p>
        </Card.Text>
        <Button variant="primary" onClick={onAddToCart(product)}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default Product;
