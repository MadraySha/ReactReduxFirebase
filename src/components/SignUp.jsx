import {Form} from "./Form";
import {Navigate, useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import React from 'react';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate("/contacts ")
            })
    }



    return (
        <Form
        title="register"
        handleClick={handleRegister}
        />
    );
};

export {SignUp}