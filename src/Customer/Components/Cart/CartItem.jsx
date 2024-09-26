import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action'

const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const cartItemUpdate=(num)=>{
    const data={
      data:{
       quantity:item?.quantity+num
      },
      cartItemId:item?.id
    }
    dispatch(updateCartItem(data));
  }
  const handleremoveCartItem=()=>{
    dispatch(removeCartItem({cartItemId:item?.id}));
  }
  
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl} alt="" />
        </div>
        <div className="ml-5 space-y-1">
            <p className="font-semibold max-w-[70vw]">{item?.product?.title}</p>
            <p className="opacity-50">size: {item?.size},{item?.product?.color}</p>
            <p className="opacity-70 mt-2">Seller:{item?.product?.brand}</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className="font-semibold">Rs {item?.discountedPrice}</p>
                <p className="opacity-50 line-through"> rs. {item?.product?.price}</p>
                <p className="text-green-600 font-semibold ">{item?.product?.discountPersent}% off</p>
            </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton onClick={()=>cartItemUpdate(-1)} disabled={item?.quantity<=1}>
              <RemoveCircleOutline/>
            </IconButton>             
            <span className="py-1 px-7 border rounded-sm">
             {item?.quantity}
            </span>     
            <IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>cartItemUpdate(1)} disabled={item?.product?.quantity<=item?.quantity}> 
              <AddCircleOutline/>
            </IconButton>      
          </div>
          <div onClick={handleremoveCartItem}>
            <Button>remove</Button>
          </div>
        </div>
    </div>
  )
}

export default CartItem
