import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe } from './slices/authSlice';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import Tests from './views/Tests';
import Blog from './views/Blog';
import Users from './views/Users';
import Ordenes from './views/Ordenes';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchMe());
    }
  }, [dispatch]);

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/tablau" element={<Users />} />
        <Route path="/tablao" element={<Ordenes />} />
          <Route index element={<Tests />} />
          {/* Add any more private routes nested inside here */}
      </Routes>
    </Router>
  );
}

export default App;
