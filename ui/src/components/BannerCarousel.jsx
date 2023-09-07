import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const BannerCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner_home_version2.jpg"
          alt="Grandes Aromas"
        />
        <Carousel.Caption style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'left',
        }}>
          <h1>Grandes Aromas</h1>
          <h2>Aromas y sabores que hacen la diferencia.</h2>
          <h3>Descúbrelo en una sola taza</h3>
          <p>
            <Button variant="outline-light">PRUEBALO</Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;