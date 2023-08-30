import React, { useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import Product from "../components/Product";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  console.log("PRODUCTS", products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
              <p>Impulsamos y promovemos la innovación en toda la cadena de producción del café de especialidad</p>
            </Col>
          </Row>
          <Row>
            <h2 className="title2">NUESTROS PRODUCTOS</h2>
            {products.length > 0 ? (
              <div className="productos">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
              </div>
            ): 'No hay productos'}
          </Row>
        </Container>
        <Container fluid>
        <Row style={{
            marginTop: '2rem',
          }}>
            
            <Col xs={6} md={6}>
              <h3>Kit mensual</h3>
              <p>3 Bolsas 340gr y 28 sobres de preparación individual.</p>
              <p>Obtienes mejor precio que al comprar por unidad.</p>
            </Col>
            <Col xs={6} md={6}>
              <Image src="/banner_2.jpg" rounded fluid />
            </Col>
          </Row>
        </Container>
      <Container>
        <Row>
          <Col sm={3} className="footer-col">
            <p>QUIENES SOMOS</p>
            <ul className="list-unstyled">
              <li><Button variant="link" size="sm">Acerca de</Button></li>
              <li><Button variant="link" size="sm">Tienda Grandes Aromas</Button></li>
              <li><Button variant="link" size="sm"></Button></li>
            </ul>
          </Col>
          <Col sm={3} className="footer-col">
            <p>MAYORISTAS</p>
            <ul className="list-unstyled">
              <li><Button variant="link" size="sm">Cafeterías</Button></li>
              <li><Button variant="link" size="sm">Distribuidores</Button></li>
            </ul>
          </Col>
          <Col sm={3} className="footer-col">
            <p>CONTACTO</p>
            <ul className="list-unstyled">
              <li><Button variant="link" size="sm">Ayuda</Button></li>
              <li><Button variant="link" size="sm">Trabaja con nosotros</Button></li>
            </ul>
          </Col>
          <Col sm={3} className="footer-col">
            <p>LEGAL</p>
            <ul className="list-unstyled">
              <li><Button variant="link" size="sm">Política de Privacidad</Button></li>
              <li><Button variant="link" size="sm">Términos de Servicio</Button></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <ul className="list-inline">
          <li><Button className='m-1' floating style={{ backgroundColor: '#3b5998' }} href='#'>
              <i fab className='bi bi-facebook' />
            </Button></li>

            <li><Button className='m-1' floating style={{ backgroundColor: '#55acee' }} href='#'>
              <i fab className='bi bi-twitter' />
            </Button></li>

            <li><Button className='m-1' floating style={{ backgroundColor: '#dd4b39' }} href='#'>
              <i fab className='bi bi-tiktok' />
            </Button></li>

            <li><Button className='m-1' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
              <i fab className='bi bi-instagram' />
            </Button></li>

            <li><Button className='m-1' floating style={{ backgroundColor: '#ed302f' }} href='#'>
              <i fab className='bi bi-youtube' />
            </Button></li>

            <li><Button className='m-1' floating style={{ backgroundColor: '#25d366' }} href='#'>
              <i fab className='bi bi-whatsapp' />
            </Button></li>
            </ul>
        </Row>
        <Row>
          <Col sm={12} className="footer-rights">
            <p>© 2023 Grandes Aromas. Todos los derechos reservados.</p>
            <p>
              <Button variant="link" size="sm">Política de Privacidad</Button>
              <Button variant="link" size="sm">Términos de Servicio</Button>
            </p>
          </Col>
        </Row>
      </Container>
      </>
  )
}

export default Home;