import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { fetchProducts } from '../slices/productSlice';
import ProductTable from '../components/ProductsTable';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container" style={{ minHeight: '350px' }}>
    <div className="button-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <h2>Productos</h2>
      <Button variant="outline-primary" href="/dashboard/crear-producto">Crear Producto</Button>
    </div>
      <div>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default Products;