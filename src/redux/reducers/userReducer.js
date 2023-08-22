const initialState = {
  users: [],
  totalCount:null,
  user:{},
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        return {
            ...state,
            isLoading:true,
        };
      //get user by id
      case 'GET_USER_SUCCESS':
        return {
            ...state,
            user: action.payload,
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