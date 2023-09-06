import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createNewProduct } from '../slices/productSlice';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category_id: 1,
        description: '',
        quantity: '',
        unit: '',
        price: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await dispatch(createNewProduct(formData));
          navigate("/dashboard/productos")
        } catch (error) {
          alert("Error al crear el producto")
        }
    }

    return (
        <Container style={{ padding: '2rem' }}>
            {success && <Alert variant="success">Product created successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

{/*                 <Form.Group controlId="formCategoryId">
                    <Form.Label>Category ID</Form.Label>
                    <Form.Control type="text" name="category_id" value={formData.category_id} onChange={handleChange} required />
                </Form.Group>
 */}
                <Form.Group controlId="formDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formQuantity">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formUnit">
                    <Form.Label>Unidad</Form.Label>
                    <Form.Control type="text" name="unit" value={formData.unit} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required />
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginTop: '2rem'}}>
                    Crear Producto
                </Button>
            </Form>
        </Container>
    );
}

export default CreateProduct;
