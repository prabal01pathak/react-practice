import { configureStore } from "@reduxjs/toolkit";
// import login from "../thunks/Thunks";
import LoginFormSlice from "./redux";

const store = configureStore({
  reducer: {
    loginForm: LoginFormSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(login),
});
export default store;
