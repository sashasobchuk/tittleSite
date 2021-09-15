import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import HeaderReducer from "./header.reducer";
import concertPageReducer from "./concertPageReducer";
import MainPageReducer from "./MainPageReducer";
import YouTube from "./youtoobeReducer";
import filePageReducer from "./filePageReducer";

const rootReducer = combineReducers({
    header:HeaderReducer,
    concertPage:concertPageReducer,
    MainPage:MainPageReducer,
    youTube:YouTube,
    filePage:filePageReducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )