import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import Loading from './Loading';

const StaffDashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);

  if (status === 'loading') {
    return <Loading />; // Display loading component when fetching user data
  }

  return (
    <Container style={{ backgroundColor: '#FFF', paddingTop: '20px' }}>
      <Row>
        {/* Display user info */}
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

export default StaffDashboard;
