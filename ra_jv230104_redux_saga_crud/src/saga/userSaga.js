import { call, put } from "redux-saga/effects";
import { ACT_USER_SUCCESS } from "../redux/actions";
import * as userService from "../api/user_service";
export const USER_SAGA_GET = function* () {
  console.log("3. Thực hiện USER_SAGA_GET - gọi sang axios");
  let listUser = yield call(userService.USER_GET);
  console.log("3. Kết quả bước 3 là: ", listUser);
  // put action
  yield put(ACT_USER_SUCCESS(listUser));
};

export const USER_SAGA_POST = function* (action) {
  try {
    // Gọi sang service để thêm mới một user
    yield call(userService.USER_POST_SERVICE, action.payload);
    // Sau khi thêm mới thành công => sẽ gọi lại hàm get để hiện thị lại dữ liệu
    yield USER_SAGA_GET();
  } catch (err) {
    console.log("Error", err);
  }
};

export const USE_SAGA_PATCH = function* (action) {
  try {
    yield call(userService.USER_PATCH_SERVICE, action.payload);
    // Sau khi update thành công => sẽ gọi lại hàm get để hiện thị dữ liệu
    yield USER_SAGA_GET();
  } catch (err) {
    console.log(err);
  }
};
