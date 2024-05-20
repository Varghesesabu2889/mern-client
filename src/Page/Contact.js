import React from 'react';
import logo from '../Assets/logoss.png';
import '../styles/contact.css'
const Contact = () => {
  const year = new Date().getFullYear(); 

  return (
    <div>
      <footer className="bg-white-300 text-black-300 py-12 rounded">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <img src={logo} alt="Logo" width={250} height={150} />
            <p>
        Welcome to Journey Junction where we're passionate about making your travel dreams a reality! Our mission is to empower travelers with tools for seamless trip planning and unforgettable experiences. Whether you're solo, with friends, or family, we're here to support your journey. Let's explore and create lasting memories together!
      </p>
      <p>
        Explore our curated selection of tours and activities, tailored to suit every traveler's interests and preferences. From adventurous expeditions to relaxing getaways, we've got something for everyone!
      </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <p>Embark on unforgettable journeys and discover the beauty of travel with us! Explore breathtaking destinations, immerse yourself in diverse cultures, and create lasting memories along the way. Whether you're a seasoned traveler or planning your next adventure, join our community to share your travel experiences, tips, and inspirations. Connect with fellow travelers, exchange stories, and get ready to embark on new horizons. Let's wander together and make every journey a remarkable experience!</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="list-group footer__quick-links">
              <li className="list-group-item ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span className='point'><i className="fa-solid fa-location-dot"></i></span>
                <span className='ml-5'>Address:Kochi, Kerala</span>  
                </h6>
              </li>
              
              <li className="list-group-item ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span  className='point'><i className="fa-solid fa-phone"></i></span>
                  <span className='ml-5'>Phone no: +91 484 345 6789</span>  
                </h6>
               
              </li>
              <li className="list-group-item ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span  className='point'><i className="fa-solid fa-envelope"></i></span>
                  <span className='ml-5'> Email: jj@123gmail.com</span>  
                </h6>
              </li>
              
                <li className="list-group-item ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span  className='point'><i class="fa-brands fa-whatsapp"></i></span>
                  <span className='ml-5'>Whatsapp no: +91 98765 43210</span>  
                </h6>
                </li>
                <li className="list-group-item ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-3">
                  <span  className='point'><i class="fa-brands fa-youtube"></i></span>
                  <span  className='ml-5'>Journey Junction</span>  
                </h6>
                </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {year} Designed and Developed by Varghese Sabu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
