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
        dispatch({type: "BIO_UPDATE_FAILED", error: error.response.data.message})
    }
}

export const updateRecBioAction = (data) => async (dispatch) => {
    try {
        dispatch({type: "BIO_UPDATE_PENDING"})
        const editRec = await axios.post(`${URL}/recruiter/update`, data,
            {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
        );
        dispatch({type: "BIO_UPDATE_SUCCESS", payload: editRec.data})
    } catch (error) {
        dispatch({type: "BIO_UPDATE_FAILED", error: error.response.data.message})
    }
}