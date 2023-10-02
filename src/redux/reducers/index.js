import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducerCandidate";
import { loginReducerRecruiter, registerReducerRecruiter } from "./authReducerRecruiter";
import { userReducer, userRecReducer } from './userReducer';
import hireReducer from './hireReducer';
import { deleteWorkData, getPortfolioData, getWorkData } from "./bioReducer";
import workerReducer from "./workerReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  login_candidate: loginReducer,
	register_candidate: registerReducer,
	login_recruiter: loginReducerRecruiter,
	register_recruiter: registerReducerRecruiter,
  user: userReducer,
  user_rec: userRecReducer,
  hire : hireReducer,
  workexp_get: getWorkData,
  workexp_delete: deleteWorkData,
  portfolio_get: getPortfolioData,
  worker: workerReducer,
  chat : chatReducer
})

export default rootReducer;
