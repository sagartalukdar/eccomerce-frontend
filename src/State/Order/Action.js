import { useNavigate } from "react-router";
import { api } from "../../Config/AppConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"

export const createOrder=(reqData)=>async(dispatchEvent)=>{
    dispatchEvent({type:CREATE_ORDER_REQUEST});
    try {
        const {data}=await api.post(`/api/orders/`,reqData.address);
        if(data.id){
            reqData.navigate({search: `step=2&order_id=${data.id}`});
            console.log("create order --",data);
            dispatchEvent({type:CREATE_ORDER_SUCCESS,payload:data});
        }
    } catch (error) {
        console.log("create order error :",error);
        dispatchEvent({type:CREATE_ORDER_FAILURE,payload:error.message});
    }
}


export const getOrderById=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:GET_ORDER_BY_ID_REQUEST});
    try {
        const {data}=await api.get(`/api/orders/${orderId}`);        
            dispatchEvent({type:GET_ORDER_BY_ID_SUCCESS,payload:data});
            console.log("get order by id, ",data);
    } catch (error) {    
        dispatchEvent({type:GET_ORDER_BY_ID_FAILURE,payload:error.message});
    }
}