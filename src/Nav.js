import React from 'react';
import {  Link } from "react-router-dom";

import {useAuth} from "./AuthContext";
import {Bars, Nav, NavLink, NavMenu} from "./NavbarElements";
const Navbar= () =>{
    return (
        <>
            <Nav>
                <NavMenu>
                        <NavLink to="/" activeStyle>Scoreboard</NavLink>
                        <NavLink to="/secret">Secret</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}
export default Navbar;