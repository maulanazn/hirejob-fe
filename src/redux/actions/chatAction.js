import axios from 'axios';
import {URL} from './../config/URL.js';
const token = localStorage.getItem('token')

export const hire = (formData,navigate) => {
    return async(dispatch) => {
        const url = URL + '/chatting/createchat/' + formData.id
        const body = {
          "position" : formData.position,
          "message_detail" : formData.message_detail
        }
        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          }
      };
        try {
          dispatch({type:'PENDING'})
          const res = await axios.post(url,body,config)
          console.log(res.data,'ini res')
          dispatch({type:'HIRE_SUCCESS',payload:res.data});
          navigate('/chat')
        }catch(err){
          dispatch({type:'HIRE_FAILED',error:err.response.data.message})
        }
    };
};

export const postChat = (id,message) => {
    return async(dispatch) => {
        const url = URL + '/chatting/createchat/' + id
        const body = {
          "message_detail" : message
        }
        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          }
      };
        try {
          dispatch({type:'PENDING'})
          const res = await axios.post(url,body,config)
          console.log(res.data,'ini res')
          dispatch({type:'POST_CHAT_SUCCESS',payload:res.data});
          dispatch(getDetailChat(id))
        }catch(err){
          dispatch({type:'POST_CHAT_FAILED',error:err.response.data.message})
        }
    };
};

export const getAllChat = () => {
  return async(dispatch) => {
      try {
        dispatch({type:'PENDING'})
        const res = await axios.get(`${URL}/chatting/ViewAllchat`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type:'GET_ALL_CHAT_SUCCESS',payload:res.data});
      }catch(err){
        dispatch({type:'GET_ALL_CHAT_FAILED',error:err.response.data.message})
      }
  };
};

export const getDetailChat = (id) => {
  return async(dispatch) => {
      try {
        dispatch({type:'PENDING'})
        const res = await axios.get(`${URL}/chatting/Viewchating/`+id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type:'GET_DETAIL_CHAT_SUCCESS',payload:res.data});
      }catch(err){
        dispatch({type:'GET_DETAIL_CHAT_FAILED',error:err.response.data.message})
      }
  };
};