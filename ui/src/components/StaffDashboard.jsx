import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import GenderBarChart from './GenderBarChart';
import Loading from './Loading';
import { API_getDashboardCountGender } from '../api';
import { useUserContext } from '../UserContext';

const StaffDashboard = () => {
  const [key, setKey] = useState('perfil');
  const { user, genderCounts, setGenderCounts } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const gender = await API_getDashboardCountGender(user.token);
        setGenderCounts(gender)
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