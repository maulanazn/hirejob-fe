import axios from "axios";
import { URL } from "../config/URL";

export const createSosmed = () => {
    return async(dispatch) => {
        try {
          dispatch({type:'SOSMED_CREATE_PENDING'})
          const res = await axios.post(`${URL}/socmed/create`, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }})
          dispatch({type:'SOSMED_CREATE_SUCCESS',payload:res.data.data});
        }catch(err){
          dispatch({type:'SOSMED_CREATE_FAILED',error:err.response.data.message})
        }
    };
};

export const updateSosmed = (id) => {
    return async(dispatch) => {
        try {
          dispatch({type:'SOSMED_UPDATE_PENDING'})
          const res = await axios.patch(`${URL}/socmed/update/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }})
          dispatch({type:'SOSMED_UPDATE_SUCCESS',payload:res.data.data});
        }catch(err){
          dispatch({type:'SOSMED_UPDATE_FAILED',error:err.response.data.message})
        }
    };
};

export const deleteSosmed = (id) => {
    return async(dispatch) => {
        try {
          dispatch({type:'SOSMED_DELETE_PENDING'})
          const res = await axios.delete(`${URL}/socmed/delete/${id}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }})
          dispatch({type:'SOSMED_DELETE_SUCCESS',payload:res.data.data});
        }catch(err){
          dispatch({type:'SOSMED_DELETE_FAILED',error:err.response.data.message})
        }
    };
};