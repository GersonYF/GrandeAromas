import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ProductTable = ({ products }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Categoría ID</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Unidad</th>
        <th>Precio</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {products && products.length > 0 ? products.map(product => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.category_id}</td>
          <td>{product.description}</td>
          <td>{product.quantity}</td>
          <td>{product.unit}</td>
          <td>{product.price}</td>
          <td>
            <div className="button-container1">
              <Button size="sm" variant="outline-secondary" href={`/shop/products/${product.id}`}><i className='bi bi-eye'></i></Button>
            </div>
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan="9">No hay productos disponibles</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default ProductTable;
