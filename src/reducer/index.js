
import createCenter from "./createCenter";
import dataForTable from "./dataForTable";
import adminData from "./adminData";
import dataForPat from "./dataForPat";
import createPatData from "./createPatData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    createCenter,
    dataForTable,
    adminData,
    createPatData,
    dataForPat
})

export default rootReducer;