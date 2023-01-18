import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../images/caro1.jpeg'
import c2 from '../../images/c22.jpg'
import c3 from '../../images/c3.jpg'
import c4 from '../../images/c4.jpg'

export default function Hero() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}
