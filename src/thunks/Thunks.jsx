import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApis from "../api/user/User";

export const login = createAsyncThunk("auth/signin", userApis.signIn);
export const createUser = createAsyncThunk("auth/signup", userApis.signUp);
export const logout = createAsyncThunk("auth/signout", userApis.signOut);
export const getUser = createAsyncThunk("auth/getUser", userApis.getUser);
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  userApis.updateUser
);
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  userApis.deleteUser
);

// export default login;
