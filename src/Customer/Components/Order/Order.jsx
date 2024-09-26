import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'


const orderStatus=[
    {lable:'on the way',value:'on_the_way'},
    {lable:'Delivered',value:'delivered'},
    {lable:'Cancelled',value:'cancelled'},
    {lable:'Returned',value:'returned'},
]

const Order = () => {


  return (
    <div className='px-5 lg:px-20'>
      <Grid container sx={{justifyContent:'space-between'}}>
        <Grid item xs={12} md={2.5}>
          <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
           <h1 className="font-bold text-lg">Filter</h1>
           <div className="space-y-4 mt-10">
            <h1 className="font-semibold">ORDER SATTUS</h1>
            {orderStatus.map((option)=>
            <div className='flex gap-3 items-center cursor-pointer'> 
              <input type="checkbox" id={option.value} defaultValue={option.value} className='cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
              <label htmlFor={option.value} className='cursor-pointer'>{option.lable}</label>
            </div>
            )}
           </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9} className='space-y-5'>
          {[11,1,1,1,1,1,1].map((item)=><OrderCard/>)}
        </Grid>
      </Grid>        
    </div>
  )
}

export default Order
