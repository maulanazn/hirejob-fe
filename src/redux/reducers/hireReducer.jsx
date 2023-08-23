const initialState = {
  user:{},
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{}
};

const hireReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        console.log('loading...')
        return {
            ...state,
            isLoading:true,
        };
      //HIRE BY USER ID
      case 'HIRE_SUCCESS':
        console.log('ini success',action.payload)
        return {
            ...state,
            user: action.payload,
            isLoading:false
        };
      case 'HIRE_FAILED':
        console.log('failed',action.error)
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      default:
        return state;
  }
};

export default hireReducer;