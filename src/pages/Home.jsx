import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
