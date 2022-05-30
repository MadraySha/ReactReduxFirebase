import React from 'react';
import {Link, NavLink} from "react-router-dom"
import {Login} from "../components/Login";
const LoginPage = () => {
    return (
        <>
            <h1>Login!</h1>
            <Login/>
            <p>
                or <NavLink to="/register">Register for free!</NavLink>
            </p>
        </>
    );
};

export {LoginPage};