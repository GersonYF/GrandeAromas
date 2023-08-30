import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Home = () => {
  return (
      <>
        <BannerCarousel />
        <Container style={{
          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <Row>
            <h2 className="text-center">Vive, Comparte, obsequia la experiencia de Grandes Aromas</h2>
          </Row>
          <Row style={{
            marginTop: '2rem',
          }}>
            <Col xs={6} md={6}>
              <Image src="/banner_2.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={6}>
            </Col>
          </Row>
        </Container>
      </>
  )
}

export default Home;