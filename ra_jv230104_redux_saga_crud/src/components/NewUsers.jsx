import React, { useState } from "react";
import { ACT_CREATE_USER } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function NewUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Khai báo các state để lưu trữ thông tin bên trong component NewUsers
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();

  const handleCreate = () => {
    dispatch(ACT_CREATE_USER({ email, password, fullname }));
    navigate("/");
  };

  return (
    <div>
      <h2>Create New User</h2>
      <label htmlFor='email'>Email: </label>
      <input
        type='text'
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor='password'>Password: </label>
      <input
        type='text'
        name='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor='fullname'>Full Name: </label>
      <input
        type='text'
        name='fullname'
        id='fullname'
        onChange={(e) => setFullname(e.target.value)}
      />
      <br />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default NewUsers;
