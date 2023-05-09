import logo from './logo.svg';
import axios from "axios";
import React, { useMemo, useState, useEffect, useSortBy } from "react";
import Navbar from './Nav';
import Table from "./Table";
import './App.css';
import Scoreboard from "./Scoreboard";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useAuth} from "./AuthContext";
import AuthNavbar from "./AuthNav";
import Logout from "./Logout";
import Secret from "./Secret";
import Register from "./Register";
export const API_URL = "";

function App() {
    const { auth } = useAuth();
    console.log(auth)
  return (
      <Router>
          {auth ? <AuthNavbar /> : <Navbar />}
          <Routes>
              <Route path='/' exact element={<Scoreboard />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/logout' exact element={<Logout />} />
              <Route path='/register' exact element={<Register />} />
              <Route path='/secret' exact element={auth ? <Secret /> : <Navigate replace to="/login" />} />
              {/*<Route path='/secret' exact element={<Login />} />*/}
          </Routes>
      </Router>
  );
}

export default App;
