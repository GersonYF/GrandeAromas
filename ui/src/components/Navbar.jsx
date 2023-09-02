import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import CartList from './CartList';  // Assuming you've stored CartList in the same directory
import { removeFromCart } from '../slices/cartSlice';  // Update with the actual path to your cart slice

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);  // Adjust path based on your store structure
  const dispatch = useDispatch();

  // State for toggling the cart dropdown
  const [showCart, setShowCart] = useState(false);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const toggleCartVisibility = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={process.env.PUBLIC_URL + 'logo.png'} style={{width: "100px"}} alt="logo" />
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
              <Button variant="outline-success" onClick={toggleCartVisibility}>
                <i className="bi bi-cart"/>
              </Button>
              {/* Conditionally render the CartList component */}
              {showCart && <CartList items={cartItems} onRemoveItem={handleRemoveItem} />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
