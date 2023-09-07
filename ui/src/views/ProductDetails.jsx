import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, fetchProductReviewsByProductId } from '../slices/productSlice';
import ProductReviewForm from '../components/ProductReviewForm';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const productReviews = useSelector(state => state.products.reviews);

  console.log(productReviews, "productReviews")

  const { id: productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(productId));
    dispatch(fetchProductReviewsByProductId(productId));
  }, [dispatch, productId]);

  if (!product) {
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
                  <p><strong>Precio:</strong> ${product.price?.toFixed(2)}</p>
                  <p><strong>Creado:</strong> {new Date(product.created_at).toLocaleString()}</p>
                  <p><strong>Actualizado:</strong> {new Date(product.updated_at).toLocaleString()}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <h3 style={{marginTop: '2rem'}}>Reseñas</h3>
          {
            productReviews.length > 0 ? (
              <ListGroup>
                {productReviews.map((review) => (
                  <ListGroup.Item key={review.id}>
                    <strong>Usuario:</strong> {review.user_id}
                    <br />
                    <strong>Comentario:</strong> {review.comment}
                    <br />
                    <strong>Estrellas:</strong> {review.stars}
                    <br />
                    <small><strong>Fecha:</strong> {new Date(review.created_at).toLocaleDateString()}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) :
            <p>No hay reseñas</p>
          }
          <ProductReviewForm productId={productId} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
