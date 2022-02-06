import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore} from "redux"
import authReducer from "./auth-reducer";

let reducers = combineReducers({
     auth: authReducer
})
let store = createStore(reducers, composeWithDevTools())
export default store;