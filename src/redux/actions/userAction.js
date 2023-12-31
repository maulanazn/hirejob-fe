import axios from 'axios';
import {URL} from './../config/URL.js';

export const getUserById = () => {
    return async(dispatch) => {
        try {
          dispatch({type:'GET_USER_PENDING'})
          const res = await axios.get(`${URL}/in`, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }})
          dispatch({type:'GET_USER_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
        }
    };
};

export const getUserRecById = () => {
    return async(dispatch) => {
        try {
          dispatch({type:'GET_USER_REC_PENDING'})
          const res = await axios.get(`${URL}/recruiter/in`, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }})
          dispatch({type:'GET_USER_REC_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_USER_REC_FAILED',error:err.response.data.message})
        }
    };
};

export const getUserPortfolio = (id) => {
  return async(dispatch) => {
      try {
        dispatch({type:'PENDING'})
        const res = await axios.get(`${URL}/portfolio-view/${id}`, {headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        dispatch({type:'GET_USER_SUCCESS',payload:res.data.data});
      }catch(err){
        dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
      }
  };
};
