import React from "react"
import Login from './Login'
import { Link } from "react-router-dom"

const Home = () => {
    return (
    <div>
        <h1>
            Welcome to Market Crypt!
        </h1>
        <button>
            <Link to='./login'>Login</Link>
        </button>
    </div>
    )
}

export default Home