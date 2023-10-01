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
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/worker/workexp`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data"
                },
            })
        dispatch({type: 'BIO_UPDATE_SUCCESS', data: result.data})
    } catch (error) {
        dispatch({type: 'BIO_UPDATE_FAILED', error: error.message})
    }
}

export const updatePortfolioAction = (data) => async (dispatch) => {
    try {
        dispatch({type: 'BIO_UPDATE_PENDING'})
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/worker/portfolio`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            },
        })
        dispatch({type: 'BIO_UPDATE_SUCCESS', data: result.data})
    } catch (error) {
        dispatch({type: 'BIO_UPDATE_FAILED', error: error.message})
    }
}

export const getWorkExpUserId = () => async (dispatch) => {
    try {
        dispatch({type: 'WORKEXP_GET_PENDING'})
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/worker/workexp`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        dispatch({type: 'WORKEXP_GET_SUCCESS', payload: result.data.data})
    } catch (error) {
        dispatch({type: 'WORKEXP_GET_FAILED', error: error.message})
    }
}

export const deleteWorkExpId = (id) => async (dispatch) => {
    try {
        dispatch({type: 'WORKEXP_DELETE_PENDING'})
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/worker/workexp/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        dispatch({type: 'WORKEXP_DELETE_SUCCESS', payload: result.data})
    } catch (error) {
        dispatch({type: 'WORKEXP_DELETE_FAILED', error: error.message})
    }
}

export const getPortfolioUserById = () => async (dispatch) => {
    try {
        dispatch({type: 'PORTFOLIO_GET_PENDING'})
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/worker/portfolio`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        dispatch({type: 'PORTFOLIO_GET_SUCCESS', payload: result.data.data})
    } catch (error) {
        dispatch({type: 'PORTFOLIO_GET_FAILED', error: error.message})
    }
}

export const deletePortofolioId = (id) => async (dispatch) => {
    try {
        dispatch({type: 'PORTOFOLIO_DELETE_PENDING'})
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/worker/portfolio/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
        })
        dispatch({type: 'PORTOFOLIO_DELETE_SUCCESS', payload: result.data})
    } catch (error) {
        dispatch({type: 'PORTOFOLIO_DELETE_FAILED', error: error.message})
    }
}