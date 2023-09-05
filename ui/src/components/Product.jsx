import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Product = ({ product, onAddToCart }) => {

  const navigate = useNavigate();  // Use the useNavigate hook

  const handleCardClick = () => {
    navigate(`/shop/productos/${product.id}`);
  }

  return (
    <Card 
      style={{ width: '18rem', margin: '0 10px', cursor: 'pointer' }} 
      onClick={handleCardClick}  // Add onClick handler to the Card
    >
      <Card.Img variant="top" src='/logo.png' />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <p>{product?.ProductCategory?.name}</p>
          <p className="Price">${product.price}</p>
          <p>{product.description}</p>
        </Card.Text>
        <Button variant="primary" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default Product;
