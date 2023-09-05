import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../slices/productSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selectedProduct);
  const { id: productId } = useParams();

  console.log(product);

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Card style={{ width: '36rem' }}>
      <Card.Header>{product.name}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <p><strong>ID de Categoría:</strong> {product.category_id}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Cantidad:</strong> {product.quantity}</p>
          </Col>
          <Col>
            <p><strong>Unidad:</strong> {product.unit}</p>
            <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Creado:</strong> {new Date(product.created_at).toLocaleString()}</p>
            <p><strong>Actualizado:</strong> {new Date(product.updated_at).toLocaleString()}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
