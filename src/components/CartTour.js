import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deletecityItem } from '../redux/tourSlice';
import toast from 'react-hot-toast';

const CartTour = ({ _id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletecityItem(_id));
    toast.success(`${name} has been removed`);
  };

  return (
    <div key={_id} className='bg-slate-300 p-2 flex'>
      <div className='p-3 bg-white rounded overflow-hidden'>
        <img src={image} className='h-28 w-32 object-cover' alt={name} />
      </div>
      <div className='w-full md:w-1/2 p-4'>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl mb-4'>{name}</h3>
        <h5 className='font-semibold text-slate-600 text-center text-lg mb-5'>{price}</h5>
        <div className='flex justify-center mt-4 gap-3 text-xl cursor-pointer hover:text-red-500' onClick={handleDelete}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default CartTour;
