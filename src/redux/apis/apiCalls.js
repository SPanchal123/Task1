import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

const Api = {}



Api.getScore = () => {
    return axios({
        method: 'GET',
        url: `/getscore`,
        
        headers:{
            "Content-type" : "application/json"
          }

    })
}


export default Api;
