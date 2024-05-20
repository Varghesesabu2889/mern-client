import React from 'react'
import Masnory,   {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from '../components/tours'
import FilterTour from '../components/FilterTours'
const ImageGallery = () => {
  return (
    
 <div>
            <h2 className="gallery__title">
              Visit our Customers gallery
            </h2>
        <Masnory gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img className='image__gallery' src={item} alt="" key={index} style={{width:"100%",
                display:"block",borderRadius:"10px"}}
                     />
                ))
            }

        </Masnory>
        
 </div>
  )
}

export default ImageGallery