import React, { useState } from "react";
import { Link } from "react-router-dom"

const SignUp = (props) => {
    const { setLoggedIn, loggedIn } = props;
    //NOTES: This is where the POST request is made to our database to make an account.
    // if the username is taken, we cant add it
    const [attemptUsername, setAttemptUsername] = useState()
    const [attemptPassword, setattemptPassword] = useState()

    const [ message, setMessage] = useState('')

    function createAccount() {
        fetch('/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
             },
            body: JSON.stringify({ attemptUsername: attemptUsername, attemptPassword: attemptPassword}),
        })
        .then(response => response.json())
        .then(data => {
            if (data['err'] === 'Username already taken!') {
                // alert(data['err'])
                setMessage(data['err'])
            }
            else {
                // alert('Thanks for signing up! :)')
                setMessage(
                    'Thanks for signing up! redirecting you shortly :)'
                )
                setTimeout(setLoggedIn, 1000, true)
            }
        })
        .catch((error) => alert('banana'));
        // this data will have all the accounts we have on file.
        // we can loop through this and find usernames and passwords that match our state
    }

    return (
        <div className="loginContainer">
            <h1>Sign Up</h1>
            <form className="signin-form">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={(ev) => setAttemptUsername(ev.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={(ev) => setattemptPassword(ev.target.value)} />
            </form>
            <div className="errorMessageContainer">
                {message}
            </div>
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