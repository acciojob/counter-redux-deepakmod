import { INCREMENT,DECREMENT,RESET } from "./ActionTypes.js";

export function increment(value){
    return { 
        type : INCREMENT,
        value : value,
    };
}

export function decrement(value){
    return { 
        type : DECREMENT ,
        value : value,
    };
}

export function reset(value){
    return { 
        type : RESET,
        value : value,
    };
}