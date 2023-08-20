import { combineReducers } from "redux";
import { 
    loginReducer as loginReducerCandidate, 
    registerReducer as registerReducerCandidate
} from "./authReducerCandidate";

import { 
    loginReducer as loginReducerRecruiter, 
    registerReducer as registerReducerRecruiter
} from "./authReducerRecruiter";

const rootReducer = combineReducers({
    candidate: {
        login: loginReducerCandidate,
        register: registerReducerCandidate
    },
    recruiter: {
        login: loginReducerRecruiter,
        register: registerReducerRecruiter
    }
});

export default rootReducer;
