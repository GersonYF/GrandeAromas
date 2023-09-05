import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';  // Import useSelector
import { createNewProductReview } from '../slices/productReviewSlice';
import { fetchProductReviewsByProductId } from '../slices/productSlice';

const ProductReviewForm = ({ productId }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [comment, setComment] = useState('');
  const [stars, setStars] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      user_id: user.id,
      product_id: productId,
      comment,
      stars: parseFloat(stars)
    };

    try {
        // Await the completion of the createNewProductReview thunk
        await dispatch(createNewProductReview(newReview));

        // After the new review is created, fetch the product reviews again
        dispatch(fetchProductReviewsByProductId(productId));
        
        // Clear the form
        setComment('');
        setStars('');
    } catch (error) {
        console.error("Error while submitting review:", error);
    }
  };

  if (!user) {
    return <Alert variant="warning" style={{marginTop: '2rem'}}>Necesitas iniciar sesión para poder comentar</Alert>;
  }

  return (
    <Container fluid style={{marginTop: '2rem'}}>
      <h3>Añadir reseña</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Comentario</Form.Label>
          <Form.Control as="textarea" rows={3} value={comment} onChange={e => setComment(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Estrellas (0-5)</Form.Label>
          <Form.Control type="number" min="0" max="5" step="0.5" value={stars} onChange={e => setStars(e.target.value)} required />
        </Form.Group>

        <Button type="submit" style={{marginTop: '1rem'}}>Enviar reseña</Button>
      </Form>
    </Container>
  );
}

export default ProductReviewForm;
