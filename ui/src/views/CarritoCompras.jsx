import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './carrito.css';

const CartItem = ({ item, onRemove }) => (
  <div className="cart-item">
    <span className="item-name">{item.name}</span>
    <span className="item-price">${item.price}</span>
    <button className="remove-button" onClick={() => onRemove(item)}>
      Remove
    </button>
  </div>
);

const ShoppingCart = ({ cartItems, onRemove }) => (
  <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    <table className="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => onRemove(item)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SelectBasicExample = () => (
  <Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
);

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
  ]);

  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const handleAddToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: 'New Product',
      price: 9.99,
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="app">
      <header>
        <h1>Online Store</h1>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </header>
      <main>
        <SelectBasicExample />
        <ShoppingCart cartItems={cartItems} onRemove={handleRemoveItem} />
      </main>
    </div>
  );
};

export default App;
