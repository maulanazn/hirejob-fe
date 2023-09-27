import axios from 'axios';
import {URL} from '../../pages/config/URL.js';
const token = localStorage.getItem('access_token')
export const getWorkerById = (id) => {
    return async(dispatch) => {
        try {
          console.log({token})
          dispatch({type:'PENDING'})
          const res = await axios.get(`${URL}/portfolio-view/` + id, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          dispatch({type:'GET_WORKER_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_WORKER_FAILED',error:err.response.data.message})
        }
    };
};