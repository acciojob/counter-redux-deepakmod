import { INCREMENT , DECREMENT , RESET } from '../ActionCreation/ActionTypes.js'

const initialValue={a:0};

function actions(state=initialValue , action){
    switch(action.type){
        case INCREMENT :
            return { a:state.a+action.value};
        case DECREMENT :
            return { a:state.a-action.value};
        case RESET :
            return { a:0};
        default :
            return state;
    }
}

export default actions;