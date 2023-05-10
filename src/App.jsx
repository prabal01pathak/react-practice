import React, { useRef } from "react";

import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "handleSubmit",
      usernameRef.current.value,
      passwordRef.current.value
    );
    alert(
      JSON.stringify(
        {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        },
        null,
        2
      )
    );
  };
  return (
    <>
    <Header />
      <div>
        <LoginForm
          onSubmit={handleSubmit}
          usernameRef={usernameRef}
          passwordRef={passwordRef}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
