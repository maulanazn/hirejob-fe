import axios from 'axios';
import {URL} from './../config/URL.js';

export const getAllWorkers = (currentPage = 1,limit = 999) => {
  const token = localStorage?.getItem('token')
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.get(`${URL}/candidates?offset=${currentPage}&limit=${limit}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type:'GET_ALL_WORKERS_SUCCESS',payload:res.data.data});
    }catch(err){
      dispatch({type:'GET_ALL_WORKERS_FAILED',error:err.response.data.message})
    }
};
}

export const searchWorkers = (key) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.get(`${URL}/candidates?offset=1&limit=5&search=${key}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type:'SEARCH_WORKERS_SUCCESS',payload:res.data.data});
    }catch(err){
      dispatch({type:'SEARCH_WORKERS_FAILED',error:err.response.data.message})
    }
};
}

export const getWorkerById = (id) => {
  const token = localStorage?.getItem('token')
    return async(dispatch) => {
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(`${URL}/portfolio-view/` + id, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          })
          dispatch({type:'GET_WORKER_SUCCESS',payload:res.data.data});
        }catch(err){
          dispatch({type:'GET_WORKER_FAILED',error:err.response.data.message})
        }
    };
};

export const createFormChat = (id,navigete) => {
  const token = localStorage?.getItem('token')
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