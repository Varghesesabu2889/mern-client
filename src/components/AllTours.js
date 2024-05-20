import React, { useEffect, useState } from 'react'
import FilterTours from './FilterTours'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'




const AllTours = ({heading}) => {
    const tourData = useSelector((state) => state.tour.tourList);
    const categoryList = [...new Set(tourData.map(el => el.category))]

      // recipes display chayannn

  const [dataFilter, setDataFilter] = useState([])

  useEffect(()=>{
    setDataFilter(tourData)
  },[tourData])



  const handleFiltertour = (category)=>{
    const filter = tourData.filter(el => el.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return [
        ...filter
      ]
    })
  }






  return (
    <div className='my-5'>
    <h1 className='font-bold text-2xl py-3 mb-4'>{heading}
    </h1>
    <div className='flex gap-4 justify-center'>
      {
        categoryList[0] && categoryList.map(el => {
          return (
            <FilterTours category={el}
            onClick={()=>handleFiltertour(el)} />
          )
        })
      }


    </div>
    <div className='flex flex-wrap justify-center gap-5 my-6'>
      {
dataFilter.map(el=>{
return(
<CardFeature
key={el._id}
id={el._id}
image={el.image}
name={el.name}
address={el.address}
distance={el.distance}
city={el.city}
price={el.price}
maxGroupSize={el.maxGroupSize}
desc={el.desc}
/>
)
})
      }
    </div>





  </div>
  )
}

export default AllTours