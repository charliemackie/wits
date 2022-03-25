import React from "react";
import {Button, Grid} from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react";
import logo from "../images/logo.png";
import "../styles/input.css"
import TextField from "@mui/material/TextField";

export default function Login() {

    return (
        
        <div>
        <img className="logo" src={logo} />
        <h1> Welcome </h1>
        <div className="app">
                <div className="form">
                <div className="input-container">
                <div className="p-3">
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                    />
                    </div>
                </div>
                <div className="input-container p-3">
                <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />
                </div>
                <div className="button-container">
                <Link to={"/form"}>
                    <input type="submit" />
                </Link>
                </div>
                <div>

                </div>
            </div>

        </div>     
        </div>
    );
}