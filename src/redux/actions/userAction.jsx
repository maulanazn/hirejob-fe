// import axios from 'axios';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_URL;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyNDFjYzNlLWIwNjYtNDI0NC1iZDhlLWNkNzQ0NGZjZDU5ZCIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2OTI2MTc4MzcsImV4cCI6MTY5MjYyNzgzN30.QeR80ArlztLEiCxa5ihjg90oqH8qDfCXaw3W2Yn8gH8'

export const getUserById = (userId) => {
    return async(dispatch) => {
        const url = serverUrl + '/workers'
        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
          payload: {
              id: '9f415485-4629-415a-9e76-47c1fc08f181'
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