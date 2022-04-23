
import createCenter from "./createCenter";
import dataForTable from "./dataForTable";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    createCenter,
    dataForTable
})

export default rootReducer;