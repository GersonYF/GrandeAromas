import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';

import { useUserContext } from './UserContext';
import './App.css'
import Tests from './views/Tests';


function App() {
  const { user } = useUserContext();

  return (
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/" element={<Tests />} />
        </Routes>
      </Router>
  );
}

export default App;