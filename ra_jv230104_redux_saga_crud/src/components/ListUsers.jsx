import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ACT_USER_GET } from "../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("1. Component List User render lần đầu");
    dispatch(ACT_USER_GET());
  }, []);

  const handleUpdate = (userUpdate) => {
    // Lưu dữ liệu vào trong localStorage
    localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
    // Chuyển sang component UpdateUser
    navigate("/updateUser");
  };

  const listUser = useSelector((state) => state.users);
  let elementListUser = listUser.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.fullname}</td>
        <td>
          <button onClick={() => handleUpdate(user)}>Update</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>List Users</h2>
      <table border={"1"}>
        <thead>
          <tr>
            <th>STT</th>
            <th>User Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{elementListUser}</tbody>
      </table>
      <button onClick={() => navigate("/newUser")}>Create New User</button>
    </div>
  );
}
