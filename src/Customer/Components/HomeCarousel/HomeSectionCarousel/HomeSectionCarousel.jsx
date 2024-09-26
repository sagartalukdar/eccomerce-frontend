import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import { mens_kurta } from '../../Data/MensKurta';

const HomeSectionCarousel = ({data,sectionName}) => {
  const[activeIndex,setActiveIndex]=useState(0);

  const sliderPrev=()=>setActiveIndex(activeIndex-1);
  const sliderNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item);

    const responsive={
        0: {items:1},
        720:{items: 3},
        1024: {items: 4.7},
    };
    const items=data.slice(0,10).map((item)=><HomeSectionCard item={item}/>)
  return (
    <div className='relative px-4 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
      <AliceCarousel
        items={items}
        activeIndex={activeIndex}
        disableButtonsControls
        disableDotsControls
        onSlideChange={syncActiveIndex}
        responsive={responsive}
      /> 
      { activeIndex !==items.length-5 &&
        <Button onClick={sliderNext} variant='contained' className='z-50' aria-label='next' sx={{position:'absolute',top:'8rem',right:'0rem',transform:'translateX(50%) rotate(90deg)',bgcolor:'white'}}>
        <KeyboardArrowLeft sx={{transform:"rotate(90deg)",color:"black"}}/>
      </Button>
      }
      {activeIndex!=0 && 
        <Button onClick={sliderPrev} variant='contained' className='z-50' aria-label='next' sx={{position:'absolute',top:'8rem',left:'0rem',transform:'translateX(-50%) rotate(90deg)',bgcolor:'white'}}>
          <KeyboardArrowLeft sx={{transform:"rotate(-90deg)",color:"black"}}/>
        </Button>
      }
      </div>
    </div>
  )
}

export default HomeSectionCarousel
