import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducer/PhimReducer";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from "./reducer/LoadingReducer";
import { QuanLyDatVeReducer } from "./reducer/QuanLyDatVeReducer";
//state tổng của ứng dụng
const rootReducer = combineReducers({
  PhimReducer: PhimReducer,
  LoadingReducer: LoadingReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer
});
//apply thunk để xử lý dispath
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
