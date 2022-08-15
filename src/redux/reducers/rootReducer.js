import { combineReducers } from "redux";
import fetchTaskReducer from "./fetchTaskReducer";
import companyUsersReducers from "./companyUserReducer";
import selectSingleTaskReducer from "./singleTaskReducer";

const rootReducer = combineReducers({
  companyUsers: companyUsersReducers,
  tasks: fetchTaskReducer,
  task: selectSingleTaskReducer,
});

export default rootReducer;
