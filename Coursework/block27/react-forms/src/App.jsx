import React from "react";
import { useState } from "react";
import "./App.css";

export default function SignUpForm() {
  const [formData, setFromData] = useState({
    username: "",
    password: "",
    error: null,
  });

  return (
    <>
      <div>
        <h2>Sign Up!</h2>

        <form>
          <label htmlFor="username">
            Username: <input type="text"/>
          </label>

          <label htmlFor="password">
            Password: <input type="text"/>
          </label>

          <button>
            <input type="button" value="Submit" />
          </button>
          
        </form>
      </div>
    </>
  );
}
