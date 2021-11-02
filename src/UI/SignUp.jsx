import React from "react";
import { Link } from "react-router-dom"

const SignUp = () => {

    //NOTES: This is where the POST request is made to our database to make an account.
    // if the username is taken, we cant add it

    return (
        <div className="loginContainer">
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={(ev) => setAttemptUsername(ev.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={(ev) => setattemptPassword(ev.target.value)} />
            </form>
            <button className="buttons">
                <Link to='./login'>Login</Link>
            </button>
        </div>
    )
}


export default SignUp