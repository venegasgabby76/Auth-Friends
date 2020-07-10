import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const handleChange = e => {
        e.persist();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLogin({
            username: "",
            password: "",
        })
        console.log("You are logging in.")
    }

    return (
        <div>This is the login page.
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={login.username}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button>LOGIN</button>

            </form>
        </div>
    )
}


export default Login;