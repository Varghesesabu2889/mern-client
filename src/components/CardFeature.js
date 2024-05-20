// CardFeature.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addcityItem } from '../redux/tourSlice';
import toast from 'react-hot-toast';

const CardFeature = ({ id, name, city, image, price, maxGroupSize, desc }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const handleAddCarttours = () => {
    if (!isAuthenticated) {
      toast.error('Please login to book Trips.');
    } else {
      dispatch(addcityItem({ id, name, city, image, price, maxGroupSize, desc }));
      toast.success(`${name} added to booking!`);
    }
  };

  const handleCardClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to see the full details of tour.');
    }
  };

  return (
    <div className='w-full min-w-[280px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col rounded'>
      <Link to={`/menu/${id}`} onClick={handleCardClick}>
        <div className='h-28 flex flex-col justify-center items-center'>
          <img src={image} className='h-full' style={{ width: "100%" }} alt={name} />
        </div>
        <h3 style={{textDecoration:"none"}} className='font-semibold text-slate-600 text-center capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>{name}</h3>
        <h5 className='font-semibold text-slate-600 text-center capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>₹{price}</h5>
      </Link>
      <button className='bg-blue-400 hover:bg-orange-500 py-1 mt-2 rounded text-black text-xl font-medium' onClick={handleAddCarttours}>
        Book Now
      </button>
    </div>
  );
};

export default CardFeature;