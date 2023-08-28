import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import StaffDashboard from './StaffDashboard';

const DashboardBody = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  if(user.is_staff){
    return (
      <StaffDashboard />
    )
  }

  return (
    <Container style={{backgroundColor: "#FFF", paddingTop: "20px"}}>
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

export default DashboardBody;
