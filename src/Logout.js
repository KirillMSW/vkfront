import React, {useState} from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import {useAuth} from "./AuthContext";
import {useNavigate} from "react-router-dom";
import {API_URL} from "./App";

// import "./Login.css";

const Logout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    setAuth(false);
    fetch(API_URL+'/api/logout', {
        method: 'POST',
        credentials: "include",
    })
    navigate("/");
    return (true);
}
export default Logout;