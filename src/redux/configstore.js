import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducer/PhimReducer";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from "./reducer/LoadingReducer";
//state tổng của ứng dụng
const rootReducer = combineReducers({
  PhimReducer: PhimReducer,
  LoadingReducer: LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
