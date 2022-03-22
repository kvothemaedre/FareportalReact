import { combineReducers } from "redux";
import employeeReducer from "./employeeReducers";

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export default rootReducer;
