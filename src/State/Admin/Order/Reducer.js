import { CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

const initialState={
    loading:false,
    error:null,
    orders:[],
    confirmed:null,
    placed:null,
    delivered:null,
    canceled:null,
    shipped:null,
}

export const adminOrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ORDER_REQUEST:
            return {...state,loading:true,error:null};
            case GET_ORDER_SUCCESS:
                return {...state,loading:false,error:null,orders:action.payload};

            case GET_ORDER_FAILURE:
                return {...state,loading:false,error:action.payload};

                case CONFIRMED_ORDER_REQUEST:
                case PLACED_ORDER_REQUEST:
                case DELIVERED_ORDER_REQUEST:
                case CANCELED_ORDER_REQUEST:
                case DELETE_ORDER_REQUEST:    
                case SHIP_ORDER_REQUEST:
                    return {...state,loading:true,error:null};
                case CONFIRMED_ORDER_SUCCESS:
                    return {...state,loading:false,error:null,confirmed:action.payload};    
                 case PLACED_ORDER_SUCCESS:
                    return {...state,loading:false,error:null,placed:action.payload};  
                    case DELIVERED_ORDER_SUCCESS:
                        return {...state,loading:false,error:null,delivered:action.payload};   
                        case CANCELED_ORDER_SUCCESS:
                            return {...state,loading:false,error:null,canceled:action.payload}; 
                            case SHIP_ORDER_SUCCESS:
                                return {...state,loading:false,error:null,shipped:action.payload};             
                            
                case DELETE_ORDER_SUCCESS:
                    return {...state,loading:false,error:null,orders:state.orders.filter((order)=>
                    order.id!==action.payload
                    )}            
                                     
                default: return state;
    }
}