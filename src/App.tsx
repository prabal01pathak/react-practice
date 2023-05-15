import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/router";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
