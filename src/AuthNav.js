import React from 'react';
import {  Link } from "react-router-dom";
import {useAuth} from "./AuthContext";
import Logout from "./Logout";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const AuthNavbar= () =>{
    const { setAuth, user } = useAuth();
    return (
        <>
            <Nav>
                <NavMenu>
                        <NavLink to="/">Scoreboard</NavLink>
                        <NavLink to="/secret">Secret</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                        <NavLink to="/sources">Sources</NavLink>

                </NavMenu>
            </Nav>
        </>
    );
}
export default AuthNavbar;