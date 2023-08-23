import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from './Loading';
import { useUserContext } from '../UserContext';

const StaffDashboard = () => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container style={{backgroundColor: "#FFF", paddingTop: "20px"}}>
      <Row>
        <h1>Hola</h1>
      </Row>
    </Container>
  )
}

export default StaffDashboard