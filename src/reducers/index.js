import { combineReducers } from "redux";
import alert from "./alertReducer";
import user from "./authReducer";
import profile from "./profileReducer";
import application from "./applyReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  application,
  user,
  alert,
  profile,
  toastr: toastrReducer
});