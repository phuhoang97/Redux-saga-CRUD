import { takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionType";
import * as userSaga from "./userSaga";
export const rootSaga = function* () {
  yield all([
    takeLatest(actionTypes.TYPE_USER_GET, userSaga.USER_SAGA_GET),
    takeLatest(actionTypes.TYPE_USER_POST_NEW, userSaga.USER_SAGA_POST),
    takeLatest(actionTypes.TYPE_USER_PATCH_NEW, userSaga.USE_SAGA_PATCH),
  ]);
};
