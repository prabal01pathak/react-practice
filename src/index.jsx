import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// import Header from "./components/Header";
import store from "./store/index";
import router from "./router/router";
// import LogRocket from "logrocket";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// LogRocket.init("wp2h7x/react-login-practice");
// LogRocket.identify("hikeUser", {
//   name: "Prabal Pathak",
//   email: "prabal@example.com",
//   subscriptionType: "pro",
// });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
