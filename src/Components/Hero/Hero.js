import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../images/caro1.jpeg'
import c2 from '../../images/c22.jpg'
import c3 from '../../images/c3.jpg'
import c5 from '../../images/c5.jpg'

export default function Hero() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c5}
          alt="First slide"
        />
        <Carousel.Caption className='mb-3'>
        <span className='bg-light text-theme py-3 px-5 fs-4 fw-bold mt-5'>Research Alliance Network</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />

        <Carousel.Caption className='mb-3'>
          <span className='bg-light text-theme py-3 px-5  fs-4 fw-bold mt-5'>Research Alliance Network</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          
          alt="Third slide"
        />

        <Carousel.Caption className='mb-3'>
        <span className='bg-light text-theme py-3 px-5 fs-4 fw-bold mt-5'>Research Alliance Network</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}
