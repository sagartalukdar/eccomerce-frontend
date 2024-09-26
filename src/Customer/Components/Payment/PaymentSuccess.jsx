import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState();
    const [referenceId,setReferenceId]=useState();
    const [paymentStatus,setPaymentStatus]=useState();
    const {orderId}=useParams();

    const dispatch=useDispatch();
    const {order}=useSelector(selector=>selector);

    useEffect(()=>{
      const urlParam=new URLSearchParams(window.location.search);
      setPaymentId(urlParam.get("razorpay_payment_id"));
      setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
      
    },[])

    useEffect(()=>{
      if(paymentId){
        dispatch(getOrderById(orderId));
        dispatch(updatePayment({orderId,paymentId}));
      }
     
    },[orderId,paymentId])

  return (
    <div className='px-2 lg:px-36'>
      <div className="flex flex-col justify-center items-center">
        <Alert
         variant='filled'
         severity='success'
         sx={{mb:6,width:"fit-content"}}
        >
          <AlertTitle>
            Payment Success
          </AlertTitle>
          congratulation your order get placed
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      <Grid className='space-y-5 py-5 pt-20' container>
        {order.order?.orderItems?.map((item)=><Grid container item className='shadow-xl rounded-md p-5' sx={{alignItems:"center",justifyContent:"space-between"}}>
          <Grid item xs={6}>
            <div className="flex items-center">
              <img className='w-[5rem] h-[5rem] object-cover object-top' src={item?.product?.imageUrl} alt="" />
              <div className='ml-5 space-y-2'>
                <p>{item?.product?.title}</p>
                <div className="opacity-50 font-semibold text-xs space-x-3"><span>Color : {item?.product?.color}</span>
                <span>Size:{item?.size}</span>
                </div>
                <p>Sellor : {item?.product?.brand} </p>
              </div>
            </div>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  )
}

export default PaymentSuccess
