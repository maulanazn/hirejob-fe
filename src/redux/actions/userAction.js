import axios from 'axios';
import {URL} from '../../pages/config/URL.js';

export const getUserById = () => {
    return async(dispatch) => {
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(`${URL}/user/candidate/in`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
          dispatch({type:'GET_USER_SUCCESS',payload:res.data.data});
        }catch(err){
          dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
        }
    };
};

export const getUserPortfolio = (id) => {
  return async(dispatch) => {
      try {
        dispatch({type:'PENDING'})
        const res = await axios.get(`${URL}/user/portfolio-view/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        dispatch({type:'GET_USER_SUCCESS',payload:res.data.data});
      }catch(err){
        dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
      }
  };
};

export const getSkill = () => {
  return async(dispatch) => {
      try {
        dispatch({type:'SKILL_PENDING'})
        const res = await axios.get(`${URL}/skill`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        dispatch({type:'GET_SKILL_SUCCESS',payload:res.data.data});
      }catch(err){
        dispatch({type:'GET_SKILL_FAILED',error:err.response.data.message})
      }
  };
};