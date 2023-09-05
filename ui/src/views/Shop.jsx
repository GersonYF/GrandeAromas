import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import debounce from 'lodash/debounce'; // Import debounce from lodash

const Shop = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);

  // Debounce the actual dispatch action
  const debouncedAddToCart = debounce((product) => {
    dispatch(addToCart(product));
  }, 300); // 300ms delay

  const onAddToCart = (product) => () => {
    debouncedAddToCart(product);
  };

  return (
    <Container style={{minHeight: '350px'}}>
      <Row>
        <h1 className="title2 text-center" style={{marginBottom: '2rem', color: 'var(--primary-color)', fontWeight: 'bold', padding: '2rem 0'}}>NUESTROS PRODUCTOS</h1>
        {products.length > 0 ? (
          <div className="productos">
            {products.map((product) => (
              <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : 'No hay productos'}
      </Row>
    </Container>
  );
};

export default Shop;
