
import createCenter from "./createCenter";
import dataForTable from "./dataForTable";
import adminData from "./adminData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    createCenter,
    dataForTable,
    adminData
})

export default rootReducer;