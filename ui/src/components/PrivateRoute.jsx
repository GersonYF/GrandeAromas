import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
