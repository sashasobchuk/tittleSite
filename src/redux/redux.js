import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import fotoPageReducer from "./fotoPageReducer";

const rootReducer = combineReducers({
/*    user:userReducer,
    files:fotoPageReducer,
    upload:uploadReducer,
    utils:appUtils*/
    fotoPage:fotoPageReducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )