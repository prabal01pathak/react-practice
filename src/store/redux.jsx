import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
// import login from "../thunks/Thunks";

const initialState = {
  username: "",
  password: "",
};

const LoginFormSlice = createSlice({
  name: "LoginForm",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    resetLoginForm: () => initialState,
  },
});

// const store = configureStore({
//   reducer: {
//     loginForm: LoginFormSlice.reducer,
//   },
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(login),
// });

export const { setUsername, setPassword, resetLoginForm } =
  LoginFormSlice.actions;
export default LoginFormSlice.reducer;
// export default store;
