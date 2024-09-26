import React, { useEffect } from 'react'
import AddressCard from './AddressCart/AddressCard'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { getOrderById } from '../../../State/Order/Action'
import CartItem from './CartItem'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummery = () => {
  
  const dispatch=useDispatch();
  const location =useLocation();
  const searchParams=new URLSearchParams(location.search);
  const {order}=useSelector(selector=>selector);
  const orderId=searchParams.get("order_id")
  useEffect(()=>{
    if(orderId){
      dispatch(getOrderById(searchParams.get("order_id")));
    }
  },[orderId])

  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order?.order?.shippingAddress}/>
      </div>
      <div>
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
         {order.order?.orderItems?.map((item)=><CartItem item={item}/>)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-3">
            <p className="uppercase font-bold opacity-60 pb-4">price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className="flex justify-between pt-3 text-black">
                <span>price</span>
                <span>Rs {order?.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className='text-green-600'>Rs {order?.order?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Toatl Discounted Price</span>
                <span className='text-green-600'>Rs {order?.order?.totalDiscountedPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Total Items</span>
                <span className='text-green-600'> {order?.order?.totalItem}</span>
              </div>
            </div>
            <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{px:'2.5rem',py:'0.7rem',bgcolor:'#9155fd'}}>
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default OrderSummery
