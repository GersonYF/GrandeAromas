import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';
import StaffDashboard from './StaffDashboard';

const DashboardBody = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const onHandleView = async (id) => {
    navigate('/answers'); // redirect to dashboard
  }

  if(user.is_staff){
    return (
      <StaffDashboard />
    )
  }

  return (
    <Container style={{backgroundColor: "#FFF", paddingTop: "20px"}}>
      <Row>
        <h1>hola 2</h1>
      </Row>
    </Container>
  );
};

export default DashboardBody;
