import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter as Router } from "react-router-dom";
import { Tienda } from "./Tienda";

const Blog = () => {
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
      <h2 className="centered-title">¿Por qué Grandes Aromas es un café especial?</h2>
      <div className="Foto">
  <div className="center_img">
    <img src="https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg" alt="Imagen central" className="porque" />
  </div>
</div>
    </div>
  );
};

ReactDOM.render(<Blog />, document.getElementById('root'));


    
    




