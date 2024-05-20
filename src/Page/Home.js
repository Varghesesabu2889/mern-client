import React from 'react';
import tour from '../Assets/tour-unscreen.gif';
import { useSelector } from 'react-redux';
import Contact from './Contact';

const Home = () => {
  const tourData = useSelector((state) => state.tour.tourList);

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3'>
        <div className='md:w-1/2'>
          <div className='flex gap-2 bg-yellow-200 w-33 px-2 items-center rounded-full'></div><br />
          <h2 className='text-4xl font-bold md:text-5xl'>Discover India's Hidden Gems: Uncovering <span className='text-blue-500'>Rare and Remarkable Destinations with us</span></h2>
          <p className='py-4 text-base'>
            During my travels through India's rare and stunning destinations, I had the privilege of discovering a secluded village nestled amidst the Western Ghats. The warm hospitality of the locals, coupled with breathtaking landscapes of tea plantations and misty mountains, created a mesmerizing and unforgettable experience.
          </p>
          <p>
            I'd like to express my gratitude to Journey Junction website for inspiring me to explore India's rare and beautiful destinations, leading me to discover hidden gems and create unforgettable memories during my travels.
          </p>
        </div>
        <div className='w-1/2 flex justify-end'>
          <img src={tour} className='max-w-full h-auto rounded-md' alt='food' />
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Home;
