import React from 'react';
import '../us.css';
import { Link } from 'react-router-dom';

const Nosotros = () => {
  return (
    <div>
      <div className="nosotros-container">
        <div className="hero-image">
          <h1 className='hero-title'>Nosotros</h1>
          <h2 className='hero-text'>Con Grande Aromas <br></br>
            todos conocerán el café de especialidad</h2>
            <Link className="nav-link-us" to="/shop">
                Nuestros productos
              </Link>
        </div>
        <div className="about-section">
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + 'preparacion-cafe-espresso.jpg'} alt="espresso foto" />
          </div>
          <div className="about-text">
            <p>
              Somos un grupo de apasionados por el café. <br></br>Disfrutamos cada una de las etapas que se involucran<br></br> en desarrollar una buena taza, desde el cultivo hasta <br></br>que lo tomamos. Cada uno con diferentes habilidades <br></br>que aportan valor al producto final, una taza de café <br></br>de excelentes condiciones sensoriales.
            </p>
            <Link className="btn" to="/">Ir a Tienda</Link>
          </div>
        </div>
        <div className="closing-section">
          <h1>Así logramos Grandes Aromas</h1>
        </div>
        <div className="team-section">
          {/* 6 imágenes circulares con nombres */}
        </div>
        
      </div>
    </div>
  );
};

export default Nosotros;