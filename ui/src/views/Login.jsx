import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../slices/authSlice';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log('Updated user:', user);

    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      if(user.is_admin || user.is_staff){
        navigate('/dashboard');
      } else {
        navigate('/profile')
      }
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container fluid style={{backgroundColor: "#eee", padding: '2rem 0'}}>
      <Row className="justify-content-center align-items-center h-100">
        <Col xl={10}>
          <Card>
            <Row className="g-0">
              <Col lg={6}>
                <Card.Body>

                  <div className="text-center">
                    <img src={process.env.PUBLIC_URL + 'logo.png'} alt="logo" style={{width: "185px"}} />
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <p>Ingresa a tu cuenta</p>

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
                        Iniciar Sesión
                      </Button>
                      <Button variant="secondary" onClick={() => navigate('/registro')} style={{marginLeft: '2rem'}}>
                        Registrar
                      </Button>
                    </div>
                  </Form>

                </Card.Body>
              </Col>
              <Col lg={6} className="d-flex align-items-center" style={{backgroundColor: "var(--primary-color)"}}>
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Ingeniería de Datos e IA</h4>
                  <p className="small mb-5">Almacenamiento de datos</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
