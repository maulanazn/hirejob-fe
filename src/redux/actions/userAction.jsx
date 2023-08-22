// import axios from 'axios';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_URL;
// const serverUrl = 'http://localhost:3001';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyNDFjYzNlLWIwNjYtNDI0NC1iZDhlLWNkNzQ0NGZjZDU5ZCIsIm5hbWUiOiJ0ZXN0ZXIiLCJpYXQiOjE2OTI3MDQ5ODUsImV4cCI6MTY5Mjc5MTM4NX0.yaq5nPPD9T19qWtgCgck60xlhRnxUbEQbNmcNTTciFs'

export const getUserById = (userId) => {
    return async(dispatch) => {
        const url = serverUrl + '/user/portfolio-view/' + userId;

        try {
        const res = await axios.get(url, {
            headers: {
                // Authorization:`Bearer ${localStorage.getItem('access_token')}`,
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', 
            },
        });
          // console.log(res.data.data[0],'ini res.data')
          dispatch({type:'GET_USER_SUCCESS',payload:res.data.data[0]});
        }catch(err){
          dispatch({type:'GET_USER_FAILED',error:err.response.data.message})
        }
    };
};