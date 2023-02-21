import React from 'react';
import { Link } from "react-router-dom";
import { RegisterForm } from '../../components/signUp/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
        <h2>Register Page</h2>
        <RegisterForm />
        <p> Already have an account?
            <Link to='/login'>Sign in</Link>
        </p>
    </div>
  )
}

export default RegisterPage