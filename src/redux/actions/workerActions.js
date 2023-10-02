import axios from 'axios';
import {URL} from '../../pages/config/URL.js';
const token = localStorage.getItem('token')

export const getWorkerById = (id) => {
    return async(dispatch) => {
        try {
          // console.log('get worker by id')
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

export const createFormChat = (id,navigete) => {
    return async(dispatch) => {
        try {
          dispatch({type:'PENDING'})
          const res = await axios.post(`${URL}/chatting/chat/` + id,{}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          dispatch({type:'CREATE_FORM_SUCCESS',payload:res.data});
          navigete('/hire/'+res.data.data.id)
        }catch(err){
          dispatch({type:'CREATE_FORM_FAILED',error:err.response.data.message})
        }
    };
};