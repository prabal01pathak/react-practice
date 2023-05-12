import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
import login from "../thunks/Thunks";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  isFetching: false,
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      console.log("pending");
      state.isFetching = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.isLoggedIn = true;
      state.error = null;
      state.isFetching = false;
      // clear the state
      state.username = "";
      state.password = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isFetching = false;
      state.error = action.error.message;
      console.log("rejected", state.isLoggedIn, state.isFetching, state.error);
    });
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
