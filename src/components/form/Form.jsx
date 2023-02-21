import React from 'react'
import { useState } from 'react'

function Form({title, handleClick}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPass(value);
                break;
            default: return;
        }
    }

  return (
    <div>
        <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
        />
        <input
            type="text"
            name="password"
            value={pass}
            placeholder="Password"
            onChange={handleChange}
        />
        <button
            onClick={() => handleClick(email, pass)}
        >
            {title}
        </button>
    </div>
  )
}

export {Form}