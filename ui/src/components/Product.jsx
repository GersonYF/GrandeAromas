import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {
  console.log(product);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://colombia.com.co/wp-content/uploads/2023/01/Bulto-de-Cafe%CC%81-Entorno-4-1.jpg' />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <p>{product?.ProductCategory?.name}</p>
          <p className="Price">${product.price}</p>
          <p>{product.description}</p>
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default Product;
