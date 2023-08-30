import React, { useEffect } from 'react'
import '../styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import Product from '../components/Product';


const Tienda = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if(user){
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  
  return (
    <div className="container">
<<<<<<< Updated upstream
=======
      <div className="top-bar">
        <h1 className="title">GRANDES AROMAS</h1>
      </div>
>>>>>>> Stashed changes
      <div>
        <h2 className="title2">NUESTROS PRODUCTOS</h2>
        {products.length > 0 ? (
          <div className="productos">
            {products.map((product) => (<Product key={product.id} product={product} />))}
          </div>
        ): 'No hay productos'}

      </div>
    </div>
  );
};

export default Tienda;
