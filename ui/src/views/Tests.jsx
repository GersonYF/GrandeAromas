import React from 'react'
import Navbar from '../components/Navbar';
import '../styles.css';


const Tienda = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="title">GRANDES AROMAS</h1>
      </div>
      <div className="bar">
        <Navbar/>
      </div>
      <div>
        <h2 className="title2">NUESTROS PRODUCTOS</h2>
        <div className='productos'>
          <div className='producto'>
          <a href="#" className="product__img">
            <img src="https://colombia.com.co/wp-content/uploads/2023/01/Bulto-de-Cafe%CC%81-Entorno-2-1.jpg" alt="Imagen de café" className="70kg" />
          </a>
          <h1 className="description">BULTO 70KG XMAYOR </h1>
          <div className="producto_info">
            <h2>Bulto de 70kg al por mayor de la marca xxxxxx</h2>
            <p>Categoría del producto: Por Mayor</p>
            <p className="Price">$270.000</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
          </div>
        </div>

        <div className='producto'>
          <a href="#" className="product__img">
            <img src="https://colombia.com.co/wp-content/uploads/2023/01/Bulto-de-Cafe%CC%81-Entorno-4-1.jpg" alt="Imagen de café" className="70kg" />
          </a>
          <h1 className="description">Descripción del producto</h1>
          <div className="producto_info">
            <h2>Nombre del producto</h2>
            <p>Categoría del producto</p>
            <p className="Price">$70.000</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
          </div>
        </div>

        <div className='producto'>
          <a href="#" className="product__img">
            <img src="https://www.cafemesadelossantos.com/wp-content/uploads/2016/12/bolsa-amazon-winnwe.jpg.png" alt="Imagen de café" className="70kg" />
          </a>
          <h1 className="description">Descripción del producto</h1>
          <div className="producto_info">
            <h2>Nombre del producto</h2>
            <p>Categoría del producto</p>
            <p className="Price">$70.000</p>
          </div>
          <div className='buttom'>
            <button className='btn'>
              Añadir al carrito
            </button>
          </div>
        </div>

      </div>
    </div>  
    </div>
  );
};

export default Tienda;
