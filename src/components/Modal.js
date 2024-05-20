import React from 'react'

import toursimg from  './../Assets/tours.jpg'
import toursimg2 from './../Assets/tours2.jpg'
import toursimg3 from './../Assets/tours3.png'
import toursimg4 from './../Assets/tours4.jpg'
import toursimg5 from './../Assets/tours5.jpg'

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
const Modal = () => {
  return (
    <div>
           <MDBCarousel>
      <MDBCarouselItem itemId={1}>
        <img src={toursimg} className='d-block w-100 mt-2' alt='car1' style={{height:"630px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={toursimg2} className='d-block w-100 mt-2' alt='car2' style={{height:"630px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={toursimg3} className='d-block w-100 mt-2' alt='car3' style={{height:"630px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={toursimg4} className='d-block w-100 mt-2' alt='car4' style={{height:"630px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={toursimg5} className='d-block w-100 mt-2' alt='car5' style={{height:"630px"}} />
      </MDBCarouselItem>
    </MDBCarousel>
       




    </div>
  )
}

export default Modal