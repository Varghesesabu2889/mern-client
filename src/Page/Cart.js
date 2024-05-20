import React from 'react';
import { useSelector } from 'react-redux';
import Cartrecipe from '../components/Cartrecipe';
import emptyCartImage from '../Assets/heart-unscreen.gif'; // Import the empty cart GIF image

const Cart = () => {
  const tourCartItem = useSelector((state) => state.tour.cityItem); // Corrected from state.tour.cartItem
  console.log(tourCartItem);

  return (
    <div className='p-2 md:p-4 justify-center items-center'>
      <h2 className='text-bold md:text-4xl font-bold text-black'>Your Booking List</h2>
      <center>
        <div className='my-4 flex gap-3 justify-center items-center'>
          <div className='w-full max-w-3xl'>
            {tourCartItem && tourCartItem.length > 0 ? (
              tourCartItem.map((el) => (
                <Cartrecipe
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  city={el.city}
                  image={el.image}
                />
              ))
            ) : (
              <div className=' justify-center items-center'>
                <img src={emptyCartImage} alt='Empty Cart' className='w-80 h-60  justify-center items-center' />
                <p className='text-3xl font-bold text-black-500'>Your booking list is empty.</p>
              </div>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Cart;
