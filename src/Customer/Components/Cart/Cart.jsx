import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckOut=()=>{
    navigate("/checkout?step=1")
  }
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const {cart}=useSelector(selector=>selector);

  useEffect(()=>{
   if(jwt){
    dispatch(getCart());
   }
  },[jwt])


  useEffect(()=>{
   if(cart.updateCart || cart.removeCartItemId){
    dispatch(getCart());
   }
  },[cart.updateCart,cart.removeCartItemId])

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
         {cart.cartItems?.map((item)=><CartItem key={item?.id} item={item}/>)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-3">
            <p className="uppercase font-bold opacity-60 pb-4">price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className="flex justify-between pt-3 text-black">
                <span>price ({cart.cart?.totalItem})</span>
                <span>Rs {cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className='text-green-600'>Rs {cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>total item</span>
                <span className='text-green-600'>Rs  {cart.cart?.totalItem}</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>totalDiscountedPrice</span>
                <span className='text-green-600'>Rs  {cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{px:'2.5rem',py:'0.7rem',bgcolor:'#9155fd'}}>
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Cart
