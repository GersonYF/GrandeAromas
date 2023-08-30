import Table from 'react-bootstrap/Table';

function TableProduct() {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Numero producto</td>  
          <td>Ejemplo Producto</td> 
          <td>Pague sapo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableProduct;