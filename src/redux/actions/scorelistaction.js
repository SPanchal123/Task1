import {
    REQUEST_SCORELIST,
    SUCCESS_SCORELIST,
    FAILURE_SCORELIST,
} from "../../constants/actionTypes";
import Api from "../apis/apiCalls";

export const requestScorelist = () =>{
    return{
        type: REQUEST_SCORELIST,
    }
}

export const successScorelist = (result) =>{
   return{
       type: SUCCESS_SCORELIST,
       Scorelist : result
    }
}

export const failureScorelist = (error) =>{
    console.log("errro")
   return{
       type:  FAILURE_SCORELIST,
       Scorelist : {

        home_team:  {
         name: "PERTH KNIGHTS",
         score: 55
         },
      
         away_team: {
          name: "SYDNEY SHARKS",
          score: 59
         }
      }
   }
}


export const getScorelist = () => {
   return function(dispatch){

    dispatch(requestScorelist())
    Api.getScore().then(result=>{
        dispatch(successScorelist(result.data))
    }).catch(error=>{
        dispatch(failureScorelist(error))
    })

   }
}