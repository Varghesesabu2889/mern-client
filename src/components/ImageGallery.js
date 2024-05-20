import React from 'react'
import Masnory,   {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from '../components/tours'
const ImageGallery = () => {
  return (
    
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3, 992:4 }}>
            <h1 className="text-center text-4xl mb-8 text-primary">Our Trip Gallery</h1>

        <Masnory gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img className='image__gallery' src={item} alt="" key={index} style={{width:"100%",
                display:"block",borderRadius:"10px"}}
                     />
                ))
            }

        </Masnory>
    </ResponsiveMasonry>
  )
}

export default ImageGallery