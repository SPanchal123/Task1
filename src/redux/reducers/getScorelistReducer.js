
import {
    REQUEST_SCORELIST,
    SUCCESS_SCORELIST,
    FAILURE_SCORELIST,
} from "../../constants/actionTypes";
const initilizeState = {
  
}

export default function getScorelistReducer (state=initilizeState, action) {
    switch(action.type){
        case REQUEST_SCORELIST:
            return{
                ...state,
             
            }
        case SUCCESS_SCORELIST:
            return{
                ...state,
                Scorelist: action.Scorelist,
            }
        case FAILURE_SCORELIST:
            return{
                ...state,
                Scorelist: action.Scorelist,
         
            }
        default:
            return state
    }
}