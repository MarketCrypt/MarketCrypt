import React, { useEffect, useState } from "react";

import SignUp from'./SignUp';

import { Link } from 'react-router-dom'

const Login = (props) => {
    const [attemptUsername, setAttemptUsername] = useState()
    const [attemptPassword, setattemptPassword] = useState()

    // NOTES: This is where we make the GET request to our database so validate the user
    function loginCommand() {
        const { setLoggedIn } = props;
        setLoggedIn(true);

        // fetch('/', {

        // })

    }

    // useEffect(()=> {
    //     // if (!loggedIn) {
    //     //     <Redirect to='/'/>
    //     // }
    // }, [])

    return (
        
    <div className="signin">
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" onChange={(ev) => setAttemptUsername(ev.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={(ev) => setattemptPassword(ev.target.value)} />
        </form>

        {/* <p>Don't have an account?</p>
        <button className="buttons">
            <Link to='/signup'>Sign Up</Link>
        </button> */}

        <div className="loginContainer">
            {/* <div className="title">Tracker</div> */}
            <button className="buttons" onClick={loginCommand}>
                Login
            </button>
            <a className="loginButton" href="/login" role="button">
                <div className="innerButton">
                <img className="googleIcon" width="30px" styles={{marginBottom:"3px", marginRight: "5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                <div className="innerButtonText">Login with Google</div>
                </div>
            </a>
        </div>
        <p>Don't have an account?</p>
        <button className="buttons">
            <Link to='/signup'>Sign Up</Link>
        </button>
    </div>

    )
}


export default Login