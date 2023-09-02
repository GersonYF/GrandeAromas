import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TableProduct from '../components/TableProduct';
import { Container } from 'react-bootstrap';


function AddressCheckout() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
          marginBottom: '2rem',
        }}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Dirección de Envio</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Dirección de Envio"
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Barrio de Entrega</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Barrio de la entrega"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un barrio valido
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Ciudad" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una ciudad valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Departamento</Form.Label>
              <Form.Control type="text" placeholder="Departamento" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una ciudad valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control type="text" placeholder="Codigo Postal" required />
              <Form.Control.Feedback type="invalid">
              Por favor ingrese una codigo postal valida.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        <TableProduct />
      </Row>
    </Container>
  );
}
    
export default AddressCheckout;

