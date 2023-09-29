import axios from "axios";
import {URL} from './../config/URL.js';

export const updateCandidateBioAction = (data) => async (dispatch) => {
    try {
        dispatch({type: "BIO_UPDATE_PENDING"})
        const editCandidate = await axios.post(`${URL}/update`, data, {
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data" 
            },
            }
        );
        dispatch({type: "BIO_UPDATE_SUCCESS", payload: editCandidate.data})
    } catch (error) {
        dispatch({type: "BIO_UPDATE_FAILED", error: error.message})
    }
}

export const updateWorkExpAction = (data) => async (dispatch) => {
    try {
        dispatch({type: 'BIO_UPDATE_PENDING'})
        const result = axios.post(`${import.meta.env.VITE_BASE_URL}/worker/workexp`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data"
                },
            })
        dispatch({type: 'BIO_UPDATE_FAILED', error: result.data})
    } catch (error) {
        dispatch({type: 'BIO_UPDATE_FAILED', error: error.message})
    }
}

export const updatePortfolioAction = (data) => async (dispatch) => {
    try {
        dispatch({type: 'BIO_UPDATE_PENDING'})
        const result = axios.post(`${import.meta.env.VITE_BASE_URL}/worker/portfolio`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            },
        })
        dispatch({type: 'BIO_UPDATE_FAILED', error: result.data})
    } catch (error) {
        dispatch({type: 'BIO_UPDATE_FAILED', error: error.message})
    }
}