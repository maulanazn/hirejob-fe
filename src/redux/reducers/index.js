import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducerCandidate";
import { loginReducerRecruiter, registerReducerRecruiter } from "./authReducerRecruiter";
import { userReducer, userRecReducer } from './userReducer';
import hireReducer from './hireReducer';
import { countPortfolioData, countWorkExpData, deleteWorkData, getPortfolioData, getPortofolioDataId, getWorkData, getWorkDataId, updatePortofolioDataId, updateWorkDataId } from "./bioReducer";
import workerReducer from "./workerReducer";
import chatReducer from "./chatReducer";
import { SosmedCreateReducer, SosmedDeleteReducer, SosmedUpdateReducer } from "./SocialMediaReducer";

const rootReducer = combineReducers({
  login_candidate: loginReducer,
	register_candidate: registerReducer,
	login_recruiter: loginReducerRecruiter,
	register_recruiter: registerReducerRecruiter,
  user: userReducer,
  user_rec: userRecReducer,
  hire : hireReducer,
  workexp_get: getWorkData,
  workexp_get_id: getWorkDataId,
  workexp_update_id: updateWorkDataId,
  workexp_count: countWorkExpData,
  workexp_delete: deleteWorkData,
  portofolio_count: countPortfolioData,
  portfolio_get: getPortfolioData,
  portofolio_get_id: getPortofolioDataId,
  portofolio_update_id: updatePortofolioDataId,
  worker: workerReducer,
  chat : chatReducer,
  create_sosmed: SosmedCreateReducer,
  update_sosmed: SosmedUpdateReducer,
  delete_sosmed: SosmedDeleteReducer
})

export default rootReducer;
