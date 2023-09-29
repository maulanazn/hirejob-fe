import axios from "axios";
import {URL} from "../config/URL.js";

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