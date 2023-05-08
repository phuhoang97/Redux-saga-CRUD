import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ACT_UPDATE_USER } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy dữ liệu từ localStorage và lưu trữ vào email, fullname
    let user = JSON.parse(localStorage.getItem("userUpdate"));
    setEmail(user.email);
    setFullname(user.fullname);
    setId(user.id);
  }, []);

  const handleUpdate = () => {
    // dispatch action
    dispatch(ACT_UPDATE_USER({ id, email, fullname }));
    // sử dụng navigate để quay về component listUser
    navigate("/");
  };

  return (
    <div>
      <h2>Update Users</h2>
      <label htmlFor='userId'>User Id: </label>
      <input
        type='text'
        name='userId'
        id='userId'
        value={id}
        onChange={(e) => setId(e.target.value)}
        readOnly
      />
      <br />
      <label htmlFor='email'>Email: </label>
      <input
        type='text'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor='fullname'>Full Name: </label>
      <input
        type='text'
        name='fullname'
        id='fullname'
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateUser;
