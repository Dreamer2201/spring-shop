import React from 'react';
import { Link } from "react-router-dom";
import { LoginForm } from '../../components/login/LoginForm';

const LoginPage = () => {
  return (
    <div>
        <h2>LoginPage</h2>
        <LoginForm />
        <p> or 
            <Link to='/register'>Sign up</Link>
        </p>
    </div>
  )
}

export default LoginPage