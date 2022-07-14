import {  createStore } from 'redux';
import { bankingReducer } from "./reducer/bankingReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from './reducer/rootReducer';
export const store = createStore(
    rootReducer,
    composeWithDevTools()
    )
