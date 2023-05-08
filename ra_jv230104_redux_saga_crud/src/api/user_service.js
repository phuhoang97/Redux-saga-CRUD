import { instance } from "./axios";
export const USER_GET = async () => {
  console.log("4. Thực hiện ở axios - gọi USER_GET");
  let response = await instance.get("users");
  console.log("4. Kết quả trả về: ", response.data);
  return response.data;
};
export const USER_POST = async (newUser) => {
  await instance.post("users", newUser);
};
export const USER_PUT = async (updateUser) => {
  await instance.put("users/" + updateUser.id, updateUser);
};
export const USER_PATCH = async (updateUser) => {
  await instance.patch("users/" + updateUser.id, updateUser);
};
export const USER_DELETE = async (id) => {
  await instance.delete("users/" + id);
};
export const USER_POST_SERVICE = async (newUser) => {
  await instance.post("users", newUser);
};
export const USER_PATCH_SERVICE = async (updateUser) => {
  await instance.patch("users/" + updateUser.id, updateUser);
};
