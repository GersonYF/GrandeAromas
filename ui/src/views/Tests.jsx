import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import '../styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import { fetchCoffeeShops } from '../slices/coffeeShopSlice';
import Product from '../components/Product';


const Tienda = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const user = useSelector((state) => state.auth.user);
  const coffeeShops = useSelector((state) => state.coffeeShops.data)

  useEffect(() => {
    if(user){
      dispatch(fetchProducts());
      dispatch(fetchCoffeeShops());
    }
  }, [dispatch]);

  
  return (
    <div className="container">
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
