import { createAsyncThunk } from "@reduxjs/toolkit";
import CreateUser from "../api/user/User";

const login = createAsyncThunk("auth/login", CreateUser);

// const authMiddleware = (store) => (next) => (action) => {
//   if (action.type === "NAVIGATE_TO_PROTECTED_PAGE") {
//     const isLoggedIn = store.getState().auth.isLoggedIn;
//     if (!isLoggedIn) {
//       // User is not logged in, redirect to login page
//       history.push("/login");
//       return;
//     }
//   }
//   return next(action);
// };

// export { authMiddleware };
export default login;
