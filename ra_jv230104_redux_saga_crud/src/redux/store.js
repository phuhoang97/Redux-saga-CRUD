import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../saga";
import { rootReducer } from "./reducers";
//Tạo 1 middleware saga
const sagaMiddleware = createSagaMiddleware();
// Tạo store của redux và chấp nhận saga là middleware của nó
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Chạy rootSaga
sagaMiddleware.run(rootSaga);
export default store;