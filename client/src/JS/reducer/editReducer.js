import { TOGGLE_FALSE , TOGGLE_TRUE } from "../constant/actionsTypes";

const initialState = {
    edit : false
}

export const editReducer = (state = initialState , action)=>{
    switch (action.type) {
        case TOGGLE_TRUE : 
            return {...state ,edit : true};
        case TOGGLE_FALSE : 
            return {...state , edit :false};
    
        default:
            return state;
    }
}