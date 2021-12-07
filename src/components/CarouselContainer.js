import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../images/Captura.png';
import image2 from '../images/Captura de pantalla 2021-11-29 180712.png';
import './styles.css';


const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false} >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  )
}



export default CarouselContainer;