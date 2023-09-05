import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { createNewUser } from '../slices/userSlice';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log('Updated user:', user);

    if (user) {
      navigate('/Tests');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createNewUser({ name, email, password }));
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container fluid style={{backgroundColor: "#eee"}}>
      <Row className="justify-content-center align-items-center h-100">
        <Col xl={10}>
          <Card>
            <Row className="g-0">
              <Col lg={6} className="d-flex align-items-center" style={{backgroundColor: "var(--primary-color)"}}>
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Ingeniería de Datos e IA</h4>
                  <p className="small mb-5">Almacenamiento de datos</p>
                </div>
              </Col>
              <Col lg={6}>
                <Card.Body>

                  <div className="text-center">
                    <img src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" style={{width: "185px"}} />
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <p>Regístrate en nuestro sitio</p>

                    <Form.Group className="mb-4">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </Form.Group>

                    <div className="text-center pt-1 mb-5 pb-1">
                      <Button variant="primary" type="submit" block>
                        Registrar
                      </Button>
                      <Button variant="secondary" onClick={() => navigate('/login')} style={{marginLeft: '2rem'}}>
                        Iniciar Sesión
                      </Button>
                    </div>
                  </Form>

                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
