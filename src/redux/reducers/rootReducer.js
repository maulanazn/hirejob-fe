import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducerCandidate";

import { loginReducerA, registerReducerA } from "./authReducerRecruiter";

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	logged: loginReducerA,
	registered: registerReducerA
});

export default rootReducer;
