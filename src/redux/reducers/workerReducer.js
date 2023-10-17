const initialState = {
  listWorkers: [],
  totalCount:null,
  worker:{},
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{},
  formId:''
};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        return {
            ...state,
            isLoading:true,
        };
      //get count
      case 'GET_COUNT_SUCCESS':
        console.log('get count success')
        return {
            ...state,
            listCount: action.payload.length,
            isLoading:false
        };
      case 'GET_COUNT_FAILED':
        console.log('get count fail')
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      //get all workers
      case 'GET_ALL_WORKERS_SUCCESS':
        console.log('get workers success')
        return {
            ...state,
            listWorkers: action.payload,
            isLoading:false
        };
      case 'GET_ALL_WORKERS_FAILED':
        console.log('get workers fail')
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      //search workers
      case 'SEARCH_WORKERS_SUCCESS':
        console.log('search workers success')
        return {
            ...state,
            listWorkers: action.payload,
            isLoading:false
        };
      case 'SEARCH_WORKERS_FAILED':
        console.log('search workers fail')
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      //get worker by id
      case 'GET_WORKER_SUCCESS':
        console.log('get worker success')
        return {
            ...state,
            worker: action.payload,
            isLoading:false
        };
      case 'GET_WORKER_FAILED':
        console.log('get worker fail')
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      //CREATE FORM CHAT
      case 'CREATE_FORM_SUCCESS':
        console.log('create success',action.payload)
        return {
            ...state,
            formId: action.payload.data.id,
            isLoading:false
        };
      case 'CREATE_FORM_FAILED':
        console.log('create fail')
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