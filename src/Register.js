import React, {useState} from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import {useAuth} from "./AuthContext";
import {useNavigate} from "react-router-dom";
import {API_URL} from "./App";

// import "./Login.css";

export default function Register() {
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
        return fetch(API_URL+'/api/register', {
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
        }else {
            setErrorMessage('User already exists!');
            console.log("hey")
        }
    }
    return (
        <div className="Register">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        autoFocus
                        name="login"
                        type="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Register
                </Button>
            </Form>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
    );
}