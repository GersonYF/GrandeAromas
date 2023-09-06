import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const CreateUserForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
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

    const handleSubmit = (e) => {
      dispatch(createUser(formData));
            //const response = await axios.post('/path-to-your-endpoint', formData)
    }

    return (
        <div>
            {success && <Alert variant="success">User created successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear Usuario
                </Button>
            </Form>
        </div>
    );
}

export default CreateUserForm;
