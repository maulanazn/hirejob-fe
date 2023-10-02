import initialState from './../config/initialState';

const hireReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        return {
            ...state,
            isLoading:true,
        };
      case 'HIRE_SUCCESS':
        return {
            ...state,
            user: action.payload,
            isLoading:false
        };
      case 'HIRE_FAILED':
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