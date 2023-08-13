import { ADD_TO_CART, GET_ITEMS_COUNT, GET_TOTAL_PRICE, REMOVE_FROM_CART } from "./constants";

// const initialState ={
//     cart_items:[],
//     total_price:0,
//     };                 

const initialState = [];

// a reducer function
export const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item=>{ return item.id!=action.data })
        //    let result = state.filter(item=>{ 
        //         if(item.id){}
        //     })
            return[ ...result ]
        
        case GET_ITEMS_COUNT:
            let count = state.reduce((sum, item) => (sum + item.qty), 0 )
            return count
            //  return items.reduce((sum, item )=> (sum + item.qty), 0)

        case GET_TOTAL_PRICE:
            let price = state.reduce((sum, item) => (sum + item.totalPrice), 0 )
            //  return items.reduce((sum, item) => (sum + item.totalPrice), 0 )
            return price
        
        default: 
            return state
    }
}
