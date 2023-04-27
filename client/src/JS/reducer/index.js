import {combineReducers} from "redux";
import { contactReducer } from "./contactReducer";
import { editReducer } from "./editReducer";

const rootReducer = combineReducers({contactReducer , editReducer});

export default rootReducer;