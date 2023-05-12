import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, resetLoginForm } from "../store/redux";
import login from "../thunks/Thunks";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => {
    return state.loginForm;
  });

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password })).then(() =>
      dispatch(resetLoginForm())
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button>Sign In</button>
      </form>
    </>
  );
}
