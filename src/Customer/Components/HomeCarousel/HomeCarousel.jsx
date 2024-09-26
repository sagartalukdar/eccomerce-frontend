import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {

  const items=  mainCarouselData.map((item)=>
    <img
     className='cursor-pointer w-full h-[25rem]'
     src={item.image}
     role='presentation'
    />
  )
  
  return (
    <AliceCarousel
     items={items}
     autoPlay
     autoPlayInterval={1000}
     disableButtonsControls
    />
  )
}

export default MainCarousel
