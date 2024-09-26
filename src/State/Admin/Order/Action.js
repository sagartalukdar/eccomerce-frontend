import { api } from "../../../Config/AppConfig";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders=()=>async(dispatchEvent)=>{
    dispatchEvent({type:GET_ORDER_REQUEST});
    try {
        const {data}=await api.get(`/api/admin/orders/`);
        console.log("get admin orders ",data);
        dispatchEvent({type:GET_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:GET_ORDER_FAILURE,payload:error.message});   
    }
}

export const confirmOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:CONFIRMED_ORDER_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/confirmed`);
        console.log("confirmed admin order ",data);
        dispatchEvent({type:CONFIRMED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:CONFIRMED_ORDER_FAILURE,payload:error.message});   
    }
}

export const placedOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:PLACED_ORDER_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/placed`);
        console.log("placed admin order ",data);
        dispatchEvent({type:PLACED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:PLACED_ORDER_FAILURE,payload:error.message});   
    }
}

export const shipOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:SHIP_ORDER_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/ship`);
        console.log("ship admin order ",data);
        dispatchEvent({type:SHIP_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:SHIP_ORDER_FAILURE,payload:error.message});   
    }
}

export const deliverOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:DELIVERED_ORDER_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/deliver`);
        console.log("deliver admin order ",data);
        dispatchEvent({type:DELIVERED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:DELIVERED_ORDER_FAILURE,payload:error.message});   
    }
}

export const cancelOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:CANCELED_ORDER_REQUEST});
    try {
        const {data}=await api.put(`/api/admin/orders/${orderId}/cancel`);
        console.log("cancel admin order ",data);
        dispatchEvent({type:CANCELED_ORDER_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:CANCELED_ORDER_FAILURE,payload:error.message});   
    }
}

export const deleteOrder=(orderId)=>async(dispatchEvent)=>{
    dispatchEvent({type:DELETE_ORDER_REQUEST});
    try {
        const {data}=await api.delete(`/api/admin/orders/${orderId}/delete`);
        console.log("delete admin order ",data);
        dispatchEvent({type:DELETE_ORDER_SUCCESS,payload:orderId});
    } catch (error) {
        dispatchEvent({type:DELETE_ORDER_FAILURE,payload:error.message});   
    }
}