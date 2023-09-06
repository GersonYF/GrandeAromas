import React from 'react';
import PreparacionCart from '../components/PreparacionCart';
import { Container, Row, Col } from 'react-bootstrap';

function Preparaciones() {
  const preparaciones = [
    {
      titulo: 'V60',
      imagen: '/v60.png',
      pasos: [
        ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
        ' Coloca el filtro de papel en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
        ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua).',
        ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
        ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',
        ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',
        ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.',
        ' Sirve el café y disfrútalo.','Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Buen provecho!',
      ],
    },
    {
      titulo: 'CHEMEX',
      imagen: '/chemex.png',
      pasos: [
        ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
        ' Coloca el filtro de papel con la parte más gruesa del filtro sobre la ranura de servido de la chemex en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
        ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua.',
        ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
        ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',    
        ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',       
        ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.', 
        ' Retira el filtro de papel con el residuo de café.',
        ' Agita la jarra suavemente para homogeneizar el café antes de servirlo en tazas.',
        'Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Disfruta de tu pragma café en Chemex!',
      ],
    },
    {
        titulo: 'AEROPRESS',
        imagen: '/aeropress.png',
        pasos: [
          ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
          ' Coloca el filtro de papel con la parte más gruesa del filtro sobre la ranura de servido de la chemex en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
          ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua.',
          ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
          ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',    
          ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',       
          ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.', 
          ' Retira el filtro de papel con el residuo de café.',
          ' Agita la jarra suavemente para homogeneizar el café antes de servirlo en tazas.',
          'Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Disfruta de tu pragma café en Chemex!',
        ],
      },
      {
        titulo: 'PRENSA FRANCESA',
        imagen: '/presafrancesa.png',
        pasos: [
          ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
          ' Coloca el filtro de papel con la parte más gruesa del filtro sobre la ranura de servido de la chemex en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
          ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua.',
          ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
          ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',    
          ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',       
          ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.', 
          ' Retira el filtro de papel con el residuo de café.',
          ' Agita la jarra suavemente para homogeneizar el café antes de servirlo en tazas.',
          'Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Disfruta de tu pragma café en Chemex!',
        ],
      },
      {
        titulo: 'CAFETERA ITALINA',
        imagen: '/cafitalina.png',
        pasos: [
          ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
          ' Coloca el filtro de papel con la parte más gruesa del filtro sobre la ranura de servido de la chemex en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
          ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua.',
          ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
          ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',    
          ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',       
          ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.', 
          ' Retira el filtro de papel con el residuo de café.',
          ' Agita la jarra suavemente para homogeneizar el café antes de servirlo en tazas.',
          'Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Disfruta de tu pragma café en Chemex!',
        ],
      },
      
      {
        titulo: 'CAFE ESPRESSO',
        imagen: '/expresso.png',
        pasos: [
          ' Calienta agua filtrada hasta justo antes de hervir unos (90-95°C).',
          ' Coloca el filtro de papel con la parte más gruesa del filtro sobre la ranura de servido de la chemex en el porta-filtros y enjuágalo con agua caliente para eliminar cualquier sabor a papel.',
          ' Añade el café molido al filtro, una cucharada por cada taza a preparar (de 8 a 12 gramos por cada 150 ml de agua.',
          ' Haz una pequeña depresión en el centro del café molido con una cuchara.',
          ' Vierte un poco de agua caliente sobre el café molido para humedecerlo y espera unos segundos para que el agua se filtre.',    
          ' Vierte agua caliente sobre el café molido en movimientos circulares desde el centro hacia el borde del filtro.',       
          ' Espera a que el agua se filtre y repite el proceso de verter agua hasta alcanzar la cantidad deseada de café.', 
          ' Retira el filtro de papel con el residuo de café.',
          ' Agita la jarra suavemente para homogeneizar el café antes de servirlo en tazas.',
          'Es importante que utilices agua de buena calidad y que ajustes la cantidad de café y agua a tu gusto personal. ¡Disfruta de tu pragma café en Chemex!',
        ],
      },
  ];

  return (
    <Container>
      <Row xs={8} md={6} lg={3} className="g-4">
        {preparaciones.map((preparacion, index) => (
          <Col key={index}>
            <PreparacionCart
              titulo={preparacion.titulo}
              imagen={preparacion.imagen}
              pasos={preparacion.pasos}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Preparaciones;


