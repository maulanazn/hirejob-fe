const initialState = {
  workers: [],
  totalCount:null,
  worker:{},
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{}
};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        return {
            ...state,
            isLoading:true,
        };
      //get worker by id
      case 'GET_WORKER_SUCCESS':
        console.log('get worker success')
        return {
            ...state,
            worker: action.payload.data[0],
            isLoading:false
        };
      case 'GET_WORKER_FAILED':
        console.log('get worker fail')
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

export default workerReducer;