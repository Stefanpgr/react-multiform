import {
  combineReducers
} from "redux";
import alert from "./alertReducer";
import user from "./authReducer";
import profile from "./profileReducer";
import application from "./applyReducer";
import paystack from './paystackReducer'
import documents from './documents'
// import appl from './appl-data-reducer'
import {
  reducer as toastrReducer
} from "react-redux-toastr";

export default combineReducers({
  application,
  documents,
  user,
  alert,
  profile,
  paystack,
  toastr: toastrReducer
});