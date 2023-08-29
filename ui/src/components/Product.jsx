import React from "react";

const Product = ({ product }) => {
  console.log(product);

  return (
    <div className='producto'>
      <a href="#" className="product__img">
        <img src={'https://colombia.com.co/wp-content/uploads/2023/01/Bulto-de-Cafe%CC%81-Entorno-4-1.jpg'} alt="Imagen de café" className="70kg" />
      </a>
      <h1 className="description">Descripción del producto</h1>
      <div className="producto_info">
        <h2>{product.name}</h2>
        <p>Categoría del producto</p>
        <p className="Price">${product.price}</p>
      </div>
      <div className='buttom'>
        <button className='btn'>
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default Product;
