// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AiFillPhone } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h1 className="title">GRANDES AROMAS</h1>
      </div>
      <div className="bar">
        <a href="tienda" className="bottom-link">Tienda</a>
        <a href="/nosotros" className="bottom-link">Nosotros</a>
        <a href="/blog" className="bottom-link">Blog</a>
        <a href="/blog" className="bottom-link">Contacto</a>
        <a href="/blog" className="bottom-link">Iniciar Sesión</a>
      </div>
      
      <h2 className="section-title">"Somos más que Café"</h2>

      <div className="content">
        <p className="description">
          Sumérgete en la deliciosa experiencia de los sabores y aromas que ofrecemos en nuestra tienda de café. Cada grano es seleccionado con pasión y tostado con precisión para brindarte una taza de satisfacción en cada sorbo. Desde los matices suaves hasta las notas intensas, nuestro café te llevará en un viaje sensorial que despertará tus sentidos. ¡Descubre una variedad que refleja nuestra dedicación por el arte del café!
        </p>
      </div>
      
      <div className="content">
        <img src="https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2023/03/1-Previsualizacion-NuevosMetodos.jpg" alt="Imagen de café" className="coffee-image" />
        <p className="description">
          </p>
          </div>
          
          <div className="contact-section">
            <div className="contact-icon">
              <AiFillPhone />
            </div>
            <div className="contact-text">
              01800-123-455
            </div>
            <div className="contact-icon">
              <FaWhatsappSquare />
            </div>
            <div className="contact-text">
              3114401294
            </div>
          </div>
        </div>
      );
    };
    
export default App;
