import axios from "axios";
import {URL} from '../../pages/config/URL.js';

export const loginAction = (data, navigate) =>
    async (dispatch) => {
        try{
            dispatch({type: 'LOGIN_PENDING'})
            const result = await axios.post(`${URL}/recruiter/login`,data)

            localStorage.setItem("token", result.data.access_token)
            localStorage.setItem("id", result.data.data.id)
            
            console.log({result})
            dispatch({payload: result.data.data, type: 'LOGIN_SUCCESS'})
            navigate('/')
        } catch(err){
            dispatch({payload:err.response.data.message, type: 'LOGIN_FAILED'})
            console.error(err.message)
        }
    }

export const registerAction = (data) =>
    async (dispatch) => {
        try {
            dispatch({type: 'REGISTER_PENDING'})

            const result = await axios.post(`${URL}/recruiter/`, data);
            dispatch({payload: result.data.data, type: 'REGISTER_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'REGISTER_FAILED'})
            console.error(error.message);
        }
    }