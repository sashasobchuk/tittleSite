import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import fotoPageReducer from "./fotoPageReducer";
import HeaderReducer from "./header.reducer";
import videoPageReducer from "./videoPageReducer";

const rootReducer = combineReducers({

    fotoPage:fotoPageReducer,
    header:HeaderReducer,
    videoPage:videoPageReducer

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )