import React from 'react'
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slises/userSlise';

export default function HomePage() {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  console.log(isAuth);
  console.log(email)
  return (
    <div>
      {isAuth ? <p>Wellcome, {email}</p> : <p>Wellcome, dear guest</p>}
        <h1>Home Page about shop</h1>
        {isAuth ? <button type='button' onClick={() => dispatch(removeUser())}>Log out</button> : <></>}
    </div>
  )
}
