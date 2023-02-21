import React from 'react'
import { Form } from '../form/Form'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slises/userSlise';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
        title="Sign in"
        handleClick={handleLogin} />
  )
}

export {LoginForm}
