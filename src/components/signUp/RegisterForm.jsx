import React from 'react'
import { Form } from '../form/Form'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slises/userSlise';

const RegisterForm = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        // console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
        .then((currentUser) => {
            // console.log(currentUser);
            const {user} = currentUser;
            // console.log(user);
            // console.log(user.email)
            // console.log(user.accessToken)
            // console.log(user.uid)
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid
            }))
            navigate("/");
        })
        .catch(console.log())
    }
    
  return (
    <Form 
        title="Sign up"
        handleClick={handleRegister} />
  )
}

export {RegisterForm}

