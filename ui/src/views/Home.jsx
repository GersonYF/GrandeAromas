import React, { useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import { addToCart } from '../slices/cartSlice';
import Product from "../components/Product";
import debounce from 'lodash/debounce'; // Import debounce from lodash

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  console.log("PRODUCTS", products)

  // Debounce the actual dispatch action
  const debouncedAddToCart = debounce((product) => {
    dispatch(addToCart(product));
  }, 300); // 300ms delay

  const onAddToCart = (product) => () => {
    debouncedAddToCart(product);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
      <>
        <BannerCarousel />
        <Container style={{
          padding: '5rem 0',
        }}>
          <Row>
            <h2 className="text-center" style={{textTransform: 'uppercase', color: 'var(--primary-color)', fontWeight: 'bold'}}>Vive, Comparte, obsequia la experiencia de Grandes Aromas</h2>
          </Row>
          <Row style={{
            marginTop: '5rem',
          }}>
            <Col xs={6} md={6}>
              <Image src="/banner_2.jpg" rounded fluid />
            </Col>
            <Col xs={6} md={6} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
              textAlign: 'center',
              fontSize: '35px',
              color: 'var(--primary-color)',
            }}>
              <p>Impulsamos y promovemos la innovación en toda la cadena de producción del café de especialidad</p>
            </Col>
          </Row>
          <Row style={{
            marginTop: '2rem',
          }}>
            <h2 className="title2 text-center" style={{marginBottom: '2rem', color: 'var(--primary-color)', fontWeight: 'bold', padding: '2rem 0'}}>NUESTROS PRODUCTOS</h2>
            {products.length > 0 ? (
              <div className="productos">
                {products.map((product, idx) => (
                  (idx < 4) ? (<Product key={product.id} product={product} onAddToCart={onAddToCart} />) : null
                  ))}
              </div>
            ): 'No hay productos'}
            <p className="text-center" style={{margin: '2em 0'}}>
              <Button href="/shop">VER TODOS</Button>
            </p>
          </Row>
        </Container>
        <Container fluid style={{
          backgroundImage: 'url(/fondo_section6_home.png)',
          marginBottom: '2rem',
          padding: '5rem 0',
        }}>
          <Container>
            <Row style={{
              marginTop: '2rem',
            }}>
              
              <Col xs={6} md={6} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
                flexDirection: 'column',
                color: 'var(--bs-white)',
              }}>
                <h3 style={{fontWeight: 'bold'}}>Kit mensual</h3>
                <p>3 Bolsas 340gr y 28 sobres de preparación individual.</p>
                <p>Obtienes mejor precio que al comprar por unidad.</p>
                <p>
                  <Button variant="outline-light">SUBSCRIBIRSE</Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
            <Row style={{
              marginTop: '2rem',
              padding: '5rem 0',
            }}>
              
              <Col xs={6} md={6} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                textAlign: 'center',
                fontSize: '35px',
                color: 'var(--primary-color)',
                textTransform: 'uppercase',
              }}>
                <p style={{fontWeight: 'bold'}}>Impulsamos y promovemos la innovación en toda la cadena de producción del café de especialidad</p>
              </Col>
              <Col xs={6} md={6}>
                <Image src="/Persona-trabajando-en-pragma.png" rounded fluid />
              </Col>
            </Row>
          </Container>
        <Container fluid style={{ backgroundColor: 'var(--primary-color)', padding: '5rem 0 1rem' }}>
        <Container>
          <Row>
            <Col sm={3} className="footer-col text-center">
              <p>QUIENES SOMOS</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Acerca de</Button></li>
                <li><Button variant="link" size="sm">Tienda Grandes Aromas</Button></li>
                <li><Button variant="link" size="sm"></Button></li>
              </ul>
            </Col>
            <Col sm={3} className="footer-col text-center">
              <p>MAYORISTAS</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Cafeterías</Button></li>
                <li><Button variant="link" size="sm">Distribuidores</Button></li>
              </ul>
            </Col>
            <Col sm={3} className="footer-col text-center">
              <p>CONTACTO</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Ayuda</Button></li>
                <li><Button variant="link" size="sm">Trabaja con nosotros</Button></li>
              </ul>
            </Col>
            <Col sm={3} className="footer-col text-center">
              <p>LEGAL</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Política de Privacidad</Button></li>
                <li><Button variant="link" size="sm">Términos de Servicio</Button></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="footer-rights text-center" style={{color: 'var(--bs-white)'}}>
              <p>© 2023 Grandes Aromas. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
        </Container>
      </>
  )
}

export default Home;