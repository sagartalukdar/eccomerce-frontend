import { api } from "../../Config/AppConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:CREATE_PAYMENT_REQUEST});
    try {
        const {data}=await api.post(`/api/payments/${orderId}`,{});
        if(data.paymentLinkUrl){
          window.location.href=data.paymentLinkUrl;
        }
    } catch (error) {
        dispatchEvent({type:CREATE_PAYMENT_FAILURE,payload:error.message});
    }
}

export const updatePayment=(reqData)=>async(dispatchEvent)=>{
    dispatchEvent({type:UPDATE_PAYMENT_REQUEST});
    try {
        const {data}=await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("update payment ",data);
    } catch (error) {
        dispatchEvent({type:UPDATE_PAYMENT_FAILURE,payload:error.message});
    }
}