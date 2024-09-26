import axios from "axios"
import { API_BASE_URL } from "../../Config/AppConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { type } from "@testing-library/user-event/dist/type";


export const registerAction=(userData)=>async(dispatcher)=>{
  dispatcher({type:REGISTER_REQUEST})  ;
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData);
    const user=response.data;
    if(user.jwt){
      console.log("register",user);
        localStorage.setItem("jwt",user.jwt);
        dispatcher({type:REGISTER_SUCCESS,payload:user});
    }
  } catch (error) {
    dispatcher({type:REGISTER_FAILURE,payload:error.message});
  }
}

export const loginAction=(userData)=>async(dispatcher)=>{
    dispatcher({type:LOGIN_REQUEST})  ;
    try {
      const response=await axios.post(`${API_BASE_URL}/auth/signin`,userData);
      const user=response.data;
      if(user.jwt){
          console.log("login",user);
          localStorage.setItem("jwt",user.jwt);
          dispatcher({type:LOGIN_SUCCESS,payload:user});
      }
    } catch (error) {
      dispatcher({type:LOGIN_FAILURE,payload:error.message});
    }
}

export const getUserProfileAction=(jwt)=>async(dispatcher)=>{
  dispatcher({type:GET_USER_REQUEST})  ;
  try {
    const response=await axios.get(`${API_BASE_URL}/api/users/profile`,{
      headers:{
        "Authorization":`Bearer ${jwt}`
      }
    });
    const user=response.data;
    if(user){
      console.log("user profile",user);
        dispatcher({type:GET_USER_SUCCESS,payload:user});
    }
  } catch (error) {
    dispatcher({type:GET_USER_FAILURE,payload:error.message});
  }
}

export const logOutAction=()=>async(dispatcher)=>{
  dispatcher({type:LOGOUT,payload:null});
  localStorage.clear();
}