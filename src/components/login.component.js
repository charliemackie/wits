import React from "react";
import {Button, Grid} from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react";
import logo from "../images/logo.png";
import "../styles/login.css"
export default function Login() {

    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <Link to={"/form"}>
            <Button variant="contained">Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
    return (
        
        <div>
        <img className="logo" src={logo} />
         <h1> Login </h1>
            
        <div className="app">
        <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
        </div>     
        
        <div className="supportwidget">
                Need support? Visit the help desk.
        </div>
        </div>

            );
}