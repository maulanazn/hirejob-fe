// import axios from 'axios';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_URL;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyNDFjYzNlLWIwNjYtNDI0NC1iZDhlLWNkNzQ0NGZjZDU5ZCIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2OTI2Mjg3ODAsImV4cCI6MTY5MjYzODc4MH0.jzxbuac-67xDcihrVxLososw5e0TRigW1tMThY1BHHw'

export const getUserById = (userId) => {
    return async(dispatch) => {
        const url = serverUrl + '/workers'
        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
          payload: {
              id: '47583e19f63cdd7e83dc693a1a9567a7'
          }
      };
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(url,config)
          console.log(res.data,'ini res')
          dispatch({type:'GET_USER_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
        }
    };
};