import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
import small from '../../assets/images/4 1400x400.jpg?srcset&quality=90';
const CarouselComp = () => {

    const medium = require('../../assets/images/4 1400x400.jpg');
    const large = require('../../assets/images/4 2000x400.jpg');
  
  return (
        <Carousel style={{width:"100%"}}>
            <Carousel.Item interval={5000} style={{width:"100%",height:"100%"}}>
            <picture>
                <source srcSet={require('../../assets/images/1 2000x400.jpg')} media="(min-width: 1400px)"/>
                <source srcSet={require('../../assets/images/1 1400x400.jpg')} media="(min-width: 768px)"/>
                <source srcs={require('../../assets/images/1 800x400.jpg')} media="(min-width: 576px)"/>
                <img src={require('../../assets/images/1 2000x400.jpg')} alt="responsive image" className="d-block w-100"/>
            </picture>
                <Carousel.Caption>
                    <div>Second slide label</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} style={{width:"100%",height:"100%"}}>
            <picture>
                <source srcSet={require('../../assets/images/2 2000x400.jpg')} media="(min-width: 1400px)"/>
                <source srcSet={require('../../assets/images/2 1400x400.jpg')} media="(min-width: 768px)"/>
                <source srcs={require('../../assets/images/2 800x400.jpg')} media="(min-width: 576px)"/>
                <img src={require('../../assets/images/2 2000x400.jpg')} alt="responsive image" className="d-block w-100"/>
            </picture>
                <Carousel.Caption>
                    <div style={{fontSize:"2vw"}}>Second slide label</div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={999999} style={{width:"100%",height:"100%"}}>
           
            <picture>
                <source srcSet={require('../../assets/images/4 2000x400.jpg')} media="(min-width: 1400px)"/>
                <source srcSet={require('../../assets/images/4 1400x400.jpg')} media="(min-width: 768px)"/>
                <source srcs={require('../../assets/images/4 800x400.jpg')} media="(min-width: 576px)"/>
                <img src={require('../../assets/images/4 2000x400.jpg')} alt="responsive image" className="d-block w-100"/>
            </picture>
                <Carousel.Caption>
                    <div style={{fontSize:"2vw"}}>Second slide label</div>
                </Carousel.Caption>
            </Carousel.Item>


            </Carousel>
  )
}

export default CarouselComp