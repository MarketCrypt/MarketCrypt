import React, { useState } from "react";
import { Link } from "react-router-dom"

const SignUp = () => {

    //NOTES: This is where the POST request is made to our database to make an account.
    // if the username is taken, we cant add it
    const [attemptUsername, setAttemptUsername] = useState()
    const [attemptPassword, setattemptPassword] = useState()

    async function createAccount() {
        await fetch('/createAccount', {
            method: 'POST',
            body: JSON.stringify({ attemptUsername: attemptUsername, attemptPassword: attemptPassword}),
            headers: {
               'Content-Type': 'Application/json'
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // this data will have all the accounts we have on file.
        // we can loop through this and find usernames and passwords that match our state
    }

    return (
        <div className="loginContainer">
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={(ev) => setAttemptUsername(ev.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" onChange={(ev) => setattemptPassword(ev.target.value)} />
            </form>
            <button className="buttons" onClick={createAccount}>
                Create Account
            </button>
            {/* <button className="buttons">
                <Link to='./login'>Login</Link>
            </button> */}
        </div>
    )
}


export default SignUp