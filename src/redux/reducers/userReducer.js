import initialState from './../config/initialState';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_USER_PENDING':
        return {
            ...state,
            isLoading:true,
        };
      //get user by id
      case 'GET_USER_SUCCESS':
        return {
            ...state,
            data: action.payload,
            isLoading:false
        };
      case 'GET_USER_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      case 'CLOSE_MODAL':
        return{
          ...state,
          showModal : false,
          isLoading:false
        };
      default:
        return state;
  }
};

export default userReducer;