import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './slices/store'; // adjust the path to your store

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe } from './slices/authSlice';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import AddressCheckout from './views/AddressCheckout';
import Tests from './views/Tests';
import Nosotros from  './views/Nosotros';
import Blog from './views/Blog';
import Users from './views/Users';
import Ordenes from './views/Ordenes';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Home from './views/Home';
import Shop from './views/Shop';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Profile from './views/Profile';
import Products from './views/Products';
import Subscriptions from './views/Subscriptions';
import ProductDetails from './views/ProductDetails';
import OrderDetails from './views/OrderDetails';

function App() {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchMe());
    }
  }, [dispatch, token]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Signup />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="usuarios" element={<Users />} />
                <Route path="ordenes" element={<Ordenes />} />
                <Route path="productos" element={<Products />}>
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route path="suscripciones" element={<Subscriptions />} />
            </Route>

            <Route path="/profile" element={<PrivateRoute />}>
              <Route index element={<Profile />} />
            </Route>
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/checkout">
              <Route index element={<AddressCheckout />} />
              <Route path="orden">
                <Route path=":id" element={<OrderDetails />} />
              </Route>
            </Route>
            <Route path="/shop">
              <Route path="productos">
                  <Route path=":id" element={<ProductDetails />} />
              </Route>
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
          <Container fluid style={{ backgroundColor: 'var(--primary-color)', padding: '5rem 0 1rem', marginTop: '3rem' }}>
        <Container>
          <Row>
            <Col sm={4} className="footer-col text-center">
              <p>QUIENES SOMOS</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Acerca de</Button></li>
                <li><Button variant="link" size="sm">Tienda Grandes Aromas</Button></li>
                <li><Button variant="link" size="sm"></Button></li>
              </ul>
            </Col>
            <Col sm={4} className="footer-col text-center">
              <p>CONTACTO</p>
              <ul className="list-unstyled">
                <li><Button variant="link" size="sm">Ayuda</Button></li>
                <li><Button variant="link" size="sm">Trabaja con nosotros</Button></li>
              </ul>
            </Col>
            <Col sm={4} className="footer-col text-center">
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
        </Container></Container>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
