import React from 'react'
import { MdPlace } from "react-icons/md";
const FilterTour = ({city,onClick}) => {
  return (
    <div onClick={onClick}>
    <div className='text-3xl p-5 bg-blue-400 hover:bg-orange-500 rounded-full cursor-pointer'>
    <MdPlace/>
    </div>
    <p className='text-center font-medium my-1 capitalize'>{city}</p>
    
    </div>
  )
}

export default FilterTour