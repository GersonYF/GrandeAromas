import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileBody = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  return (
    <Container style={{backgroundColor: "#FFF", paddingTop: "20px", minHeight: '350px'}}>
      <Row>
        {user ? (
          <>
            <h1>Hola, {user.name}</h1>
            <p>Email: {user.email}</p>
            {/* Display more user info as needed */}
          </>
        ) : (
          <p>No user data available.</p>
        )}
      </Row>
    </Container>
  );
};

export default ProfileBody;
