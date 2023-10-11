import axios from "axios";
import {URL} from './../config/URL.js';

export const loginAction = (data, navigate) =>
    async (dispatch) => {
        try{
            console.log(data)
            dispatch({type: 'LOGIN_PENDING'})
            const result = await axios.post(`${URL}/login/`,data)
            localStorage.setItem("token", result.data.access_token)
            localStorage.setItem("id", result.data.data.id)

            dispatch({payload: result.data.data, type: 'LOGIN_SUCCESS'})
            navigate('/edit-candidate')
        } catch(err){
            dispatch({payload:err.message, type: 'LOGIN_FAILED'})
            console.error(err.message)
        }
    }

export const registerAction = (data, navigate) =>
    async (dispatch) => {
        try {
            dispatch({type: 'REGISTER_PENDING'})

            const result = await axios.post(`${URL}/register`, data);
            navigate('/login/candidate')
            dispatch({payload: result.data.data, type: 'REGISTER_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'REGISTER_FAILED'})
            console.error(error.message);
        }
    }