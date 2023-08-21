import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducerCandidate";

import { loginReducerRecruiter, registerReducerRecruiter } from "./authReducerRecruiter";

const rootReducer = combineReducers({
	login_candidate: loginReducer,
	register_candidate: registerReducer,
	login_recruiter: loginReducerRecruiter,
	register_recruiter: registerReducerRecruiter
});

export default rootReducer;
