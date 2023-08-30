import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Grandes Aromas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li>
              <Link className='nav-link' to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/shop">
                Tienda
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/shop">
                Mayoristas
              </Link>
            </li>
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Ver perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Nosotros">
                      Nosotros
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li>
              <Button variant="outline-success">
                <i class="bi bi-cart"/>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
