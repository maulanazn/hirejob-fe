import axios from 'axios';

const serverUrl = import.meta.env.VITE_URL;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyNDFjYzNlLWIwNjYtNDI0NC1iZDhlLWNkNzQ0NGZjZDU5ZCIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2OTI2Mjg3ODAsImV4cCI6MTY5MjYzODc4MH0.jzxbuac-67xDcihrVxLososw5e0TRigW1tMThY1BHHw'

export const hire = (formData) => {
    return async(dispatch) => {
        const url = serverUrl + '/chatting/createchat/' + formData.id
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
        }catch(err){
          dispatch({type:'HIRE_FAILED',error:err.response.data.message})
        }
    };
};