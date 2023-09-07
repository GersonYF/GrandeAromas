import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

function PreparacionCart({ titulo, imagen, pasos }) {
  return (
    <Card style={{ width: '18rem', position: 'relative' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
        <Card.Title>{titulo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Accordion>
            <Accordion.Item eventKey={`details-${titulo}`}>
              <Accordion.Header>Detalles</Accordion.Header>
              <Accordion.Body>
                <ol>
                  {pasos.map((paso, pasoIndex) => (
                    <li key={pasoIndex}>{paso}</li>
                  ))}
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PreparacionCart;