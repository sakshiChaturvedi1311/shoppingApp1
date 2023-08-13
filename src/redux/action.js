import { ADD_TO_CART, GET_ITEMS_COUNT, GET_TOTAL_PRICE } from "./constants";
import { REMOVE_FROM_CART } from "./constants";

export function addToCart(item){
    return {
        type: ADD_TO_CART,   // action type
        data: item          //payload
    }
} 

export function removeFromCart(item){
    return {
        type: REMOVE_FROM_CART,   
        data: item  
    }
}

export function getItemsCount(item){
    return {
        type: GET_ITEMS_COUNT,   
        data: item  
    }

}

export function getTotalPrice(item){
    return {
        type: GET_TOTAL_PRICE,   
        data: item  
    }

}
