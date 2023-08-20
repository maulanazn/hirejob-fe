import axios from "axios";
import {URL} from '../../pages/config/URL.js';

export const loginAction = (data, navigate) =>
    async (dispatch) => {
        try{
            dispatch({type: 'LOGIN_PENDING'})
            const result = await axios.post(`${URL}/login`,data)

            localStorage.setItem("token", result.data.accesstoken)
            localStorage.setItem("name", result.data.data.name)
            localStorage.setItem("email", result.data.data.email)
            localStorage.setItem("photo", result.data.data.photo)

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

            const result = await axios.post(`${URL}/register`, data);
            dispatch({payload: result.data.data, type: 'REGISTER_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'REGISTER_FAILED'})
            console.error(error.message);
        }
    }