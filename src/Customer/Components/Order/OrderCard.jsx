import { AdjustOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border m-2'>
      <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
       <Grid item xs={6}>
         <div className='flex items-center cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover origin-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70" alt="" />
            <div className="ml-5 space-y-2">
                <p className=''>Get free delivery on orders over $100</p>
                <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                <p className='opacity-50 text-xs font-semibold'>color:black</p>
            </div>
         </div>
       </Grid>
       <Grid item xs={2}>
          <p>1200</p>
       </Grid>
       <Grid item xs={4}>
          {true ? <div> <p> <AdjustOutlined sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm'/> <span>Deliver on March 03</span></p><p className='text-xs'>your order has been delivered</p></div> :
          <p><AdjustOutlined sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm' /><span>expected Deliver on March 03</span></p>}
       </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
