import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe } from './slices/authSlice';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import Address from './views/Address';
import Tests from './views/Tests';
import Nosotros from  './views/Nosotros';
import Blog from './views/Blog';
import Users from './views/Users';
import Ordenes from './views/Ordenes';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Home from './views/Home';

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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/tablau" element={<Users />} />
        <Route path="/tablao" element={<Ordenes />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/checkout" element={<Address />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<PrivateRoute />} > 
          <Route index element={<Tests />} />
          {/* Add any more private routes nested inside here
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
