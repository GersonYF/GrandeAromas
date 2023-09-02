import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function TableProduct() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableProduct;
