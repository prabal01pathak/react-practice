import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "../store/redux";
import login from "../thunks/Thunks";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { username, password, isLoggedIn, isFetching, error } = useSelector(
    (state) => {
      return state.loginForm;
    }
  );
  useEffect(() => {
    console.log("useEffect", error);
    if (error) {
      console.log("statisfied");
      const timer = setTimeout(() => {
        alert(error);
        // dispatch(resetLoginForm());
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password })); //.then(() =>
    //   dispatch(resetLoginForm())
    // );
  };

  return (
    <>
      <div>
        {isFetching && <div> Loading.... </div>}
        {error && <div> {error} </div>}
      </div>
      {!isLoggedIn && (
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
      )}
    </>
  );
}
