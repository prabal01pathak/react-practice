import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </>
  );
}
