import { api } from "../../Config/AppConfig";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const addItemToCart=(reqData)=>async(dispatchEvent)=>{
    dispatchEvent({type:ADD_ITEM_TO_CART_REQUEST});
    try {
        const {data}=await api.put(`/api/cart/add`,reqData);
        dispatchEvent({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
        console.log("add item to cart :",data);
    } catch (error) {
        dispatchEvent({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message});   
    }
}

export const getCart=()=>async(dispatchEvent)=>{
    dispatchEvent({type:GET_CART_REQUEST});
    try {
        const {data}=await api.get(`/api/cart/`);
        dispatchEvent({type:GET_CART_SUCCESS,payload:data});
        console.log("user cart :",data);
    } catch (error) {
        dispatchEvent({type:GET_CART_FAILURE,payload:error.message});   
    }
}

export const removeCartItem=(reqData)=>async(dispatchEvent)=>{
    dispatchEvent({type:REMOVE_CART_ITEM_REQUEST});
    try {
        const {data}=await api.delete(`/api/cart_items/${reqData.cartItemId}`);
        dispatchEvent({type:REMOVE_CART_ITEM_SUCCESS,payload:reqData.cartItemId});
    } catch (error) {
        dispatchEvent({type:REMOVE_CART_ITEM_FAILURE,payload:error.message});   
    }
}

export const updateCartItem=(reqData)=>async(dispatchEvent)=>{
    dispatchEvent({type:UPDATE_CART_ITEM_REQUEST});
    try {
        const {data}=await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data);
        dispatchEvent({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
    } catch (error) {
        dispatchEvent({type:UPDATE_CART_ITEM_FAILURE,payload:error.message});   
    }
}