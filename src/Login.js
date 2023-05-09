import React, {useState} from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import {useAuth} from "./AuthContext";
import {useNavigate} from "react-router-dom";
import {Frm} from "./Forms";
import {API_URL} from "./App";

// import "./Login.css";

export default function Login() {
    const { setAuth } = useAuth();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }
    async function loginUser(credentials) {
        let formdata;
        formdata = new FormData;
        formdata.append("login",login);
        formdata.append("password", password);
        return fetch(API_URL+'/api/login', {
            method: 'POST',
            body: formdata,
            credentials: "include",
        })

    }
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        const token = await loginUser({
            login,
            password
        });
        console.log(token.status)
        if (token.status===200){
            setAuth(true);
            navigate("/");
            console.log("yep");
        } else {
            setErrorMessage('Invalid login or password');
            console.log("hey")
        }

    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>

                <Form.Group size="lg">

                    <Form.Label >Login </Form.Label>
                    <Form.Control
                        autoFocus
                        name="login"
                        type="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                </Form.Group>
                <Form.Group size="lg" controlId="password">

                        <Form.Label>Password </Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
    );
}