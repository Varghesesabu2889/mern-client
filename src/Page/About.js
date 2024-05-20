import React, { useState } from 'react'
import cook from '../Assets/about.gif'
import verify from '../Assets/verified-unscreen.gif';
import Contact from './Contact';

const About = () => {
  const [showThanks, setShowThanks] = useState(false);
  const handleSubscribe = () =>{
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 5000);

  }
  return (
   <>
   <div className='p-2 md:p-4'>
   <div className='md:flex gap-4 py-3'>

<div className='md:w-1/2'>
  
  <h2 className='text-6xl font-bold md:text-5xl '>Welcome to <span className='text-blue-500'> Journey Junction</span> , your ultimate destination for culinary inspiration and community-driven travel booking.</h2>
  <p className='py-4 text text-dark'>At Journey Junction, we're dedicated to transforming your travel aspirations into unforgettable adventures. Our goal is to equip you with the resources and expertise needed to craft personalized journeys that resonate with your wanderlust spirit. Whether you're embarking on a solo escapade, planning a getaway with loved ones, or seeking new horizons with friends, our platform is your gateway to immersive experiences and cherished memories.
</p> <p>
Our team of travel enthusiasts and experts curates a diverse range of destinations, activities, and accommodations to cater to your unique preferences and interests. From serene beach retreats to thrilling mountain expeditions, cultural immersions to culinary explorations, we strive to fulfill every traveler's dreams. </p>
  <button onClick={handleSubscribe} className='font-bold bg-blue-600 text-slate-200 px-4 py-2 rounded-md'>Subscribe</button>
</div>
{showThanks && (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
    <div className="bg-white p-5 rounded-md">
      <img src={verify} className="mx-auto mb-4" alt="verified"/>
      <h2 className="text-2xl font-bold mb-4 items-center justify-center">Thank You for Subscribing!</h2>
      <p className="text-lg items-center justify-center">We're excited to have you join our community.</p>
    </div>
  </div>
)}

<div className='w-1/2 flex justify-end'>
  <img src={cook} className='max-w-full h-auto rounded-md' alt='food' />
</div>
</div>
</div>
<Contact/>
   
   
   
   
   
   
   
   </>
  )
}

export default About