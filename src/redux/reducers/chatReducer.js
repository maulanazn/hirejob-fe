const initialState = {
  chats:[],
  chat:null,
  isError:false,
  isLoading : false,
  showModal:false,
  modalMessage:{}
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        console.log('loading...')
        return {
            ...state,
            isLoading:true,
        };
      //HIRE 
      case 'HIRE_SUCCESS':
        console.log('ini success',action.payload)
        return {
            ...state,
            isError:false,
            isLoading:false
        };
      case 'HIRE_FAILED':
        console.log('failed',action.error)
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      //CHAT
      case 'POST_CHAT_SUCCESS':
        console.log('ini success',action.payload)
        return {
            ...state,
            isError:false,
            isLoading:false
        };
      case 'POST_CHAT_FAILED':
        console.log('failed',action.error)
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      // GET ALL CHAT 
      case 'GET_ALL_CHAT_SUCCESS':
        console.log('get all success',action.payload.data)
        return {
            ...state,
            chats: action.payload.data,
            isLoading:false
        };
      case 'GET_ALL_CHAT_FAILED':
        console.log('failed',action.error)
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      // GET DETAIL CHAT 
      case 'GET_DETAIL_CHAT_SUCCESS':
        console.log('get chat success',action.payload)
        return {
            ...state,
            chat: action.payload.data,
            isLoading:false
        };
      case 'GET_DETAIL_CHAT_FAILED':
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

export default chatReducer;