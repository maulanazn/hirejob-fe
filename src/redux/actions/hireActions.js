import axios from 'axios';

export const hire = (formData) => {
    return async(dispatch) => {
        const url = import.meta.env.VITE_URL + '/chatting/createchat/' + formData.id
        const body = {
          "position" : formData.position,
          "message_detail" : formData.message_detail
        }
        const config = {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
              'Content-Type': 'application/json',
          }
      };
        try {
          dispatch({type:'PENDING'})
          const res = await axios.post(url,body,config)
          dispatch({type:'HIRE_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'HIRE_FAILED',error:err.response.data.message})
        }
    };
};