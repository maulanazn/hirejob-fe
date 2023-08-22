import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducerCandidate";

import { loginReducerRecruiter, registerReducerRecruiter } from "./authReducerRecruiter";
import userReducer from './userReducer';

const rootReducer = combineReducers({
	login_candidate: loginReducer,
	register_candidate: registerReducer,
	login_recruiter: loginReducerRecruiter,
	register_recruiter: registerReducerRecruiter,
	user: userReducer,
});

export default rootReducer;
