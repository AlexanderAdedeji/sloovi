import { combineReducers } from "redux";
import taskReducer from "./taskReducer"
import companyUsersReducers from "./companyUserReducer"

const rootReducer = combineReducers({
    companyUsers: companyUsersReducers,
    tasks:taskReducer
  });
  

  export default rootReducer;