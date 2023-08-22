import { combineReducers } from "redux";
import userReducer from './userReducer';
import hireReducer from './hireReducer'

const rootReducer = combineReducers({
  user: userReducer,
  hire : hireReducer
})

export default rootReducer;