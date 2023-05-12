import { createAsyncThunk } from "@reduxjs/toolkit";
import CreateUser from "../api/user/User";

const login = createAsyncThunk("auth/login", CreateUser);

export default login;
