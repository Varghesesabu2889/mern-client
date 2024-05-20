import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addcityItem } from '../redux/tourSlice';
import toast from 'react-hot-toast';

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const tourData = useSelector(state => state.tour.tourList);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  // Find the tour by ID
  const tourDisplay = tourData.find(el => el._id === filterby);

  // Render nothing if tourDisplay is not available
  if (!tourDisplay) {
    return null;
  }

  const handleAddCarttours = (e) => {
    if (!isAuthenticated) {
      toast.error('Please login to book the tour.');
      return;
     
    }
    dispatch(addcityItem(tourDisplay))
    toast.success(`${tourDisplay.name} added to booking`)
  };

  

  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl bg-white mx-auto md:flex rounded shadow-lg'>
        <div className='w-full md:w-1/2'>
          <div className='aspect-w-20 aspect-h-20'>
            <img src={tourDisplay.image} alt='' className='object-cover w-full h-full rounded-l-md hover:scale-105 transition-all rounded' />
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>

          <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl mb-4'>{tourDisplay.name}</h3>
          <h5 className='font-semibold text-slate-600 text-center capitalize text-lg mb-4'>Price:₹{tourDisplay.price}/person</h5>



          {isAuthenticated && (
            <>
              <div>
              <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl mb-4'>State:{tourDisplay.city}</h3>
              <h5 className='font-semibold text-slate-600 text-center capitalize text-2xl mb-4'>Address:{tourDisplay.address}</h5>
              {/* <h5 className='font-semibold text-slate-600 text-center capitalize text-lg mb-4'>Distance:{tourDisplay.distance}km</h5> */}
              <h5 className='font-semibold text-slate-600 text-center capitalize text-lg mb-4'>Max Group Size:{tourDisplay.maxGroupSize}<i class="fa-solid fa-user-group"></i></h5>



              </div>
              <div>
                <h6 className='font-semibold text-slate-600 capitalize text-lg mb-2'>About  this Place:</h6>
                <p className='py-2 text-base'>{tourDisplay.desc}</p>
              </div>
            </>
          )}
          <div className='flex justify-center mt-4'>
            {/* <button onClick={handleAddCarttours} className='bg-blue-400 hover:bg-orange-500 py-2 px-4 rounded-full text-black text-xl font-medium'>Add to Booking</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
