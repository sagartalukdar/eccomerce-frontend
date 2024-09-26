import React from 'react'
import AddressCard from '../Cart/AddressCart/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StairsOutlined, StarBorderPurple500Outlined } from '@mui/icons-material'


const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
      <div >
        <h1 className='font-bold text-xl py-10'>Delivery Address</h1>
        <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>
      <Grid container className='space-y-5'>
        {[1,1,1,1,1,1].map((item)=>         <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:'center',justifyContent:'space-between'}}>
           <Grid item xs={6}>
            <div className='flex items-center cursor-pointer gap-3'>
            <img className='w-[5rem] h-[5rem] object-cover origin-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70" alt="" />
            <div className="ml-5 space-y-2">
            <p className="font-semibold max-w-[70vw]">Lorem ipsum dolor sit amet consectetur.</p>
            <p className='space-x-5'><span>color: white</span> <span>size: L</span> </p>
            <p className="opacity-70 mt-2">Seller:Company name</p>
            <p>.2120</p>               
            </div>
            </div>
           </Grid>
           <Grid item>
              <Box sx={{color:deepPurple[500]}}>
               <StarBorderPurple500Outlined sx={{fontSize:'2rem'}} className='px-2'/>
               <span>rate & review product</span>
              </Box>
           </Grid>
         </Grid>)}
      </Grid>
    </div>
  )
}

export default OrderDetails
