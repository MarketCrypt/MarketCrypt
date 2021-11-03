import React from "react"
import Login from './Login'
import { Link } from "react-router-dom"

const Home = () => {
    return (
    <div className="home" >
        <h1>
            Welcome to Market Crypt!
        </h1>
        <button className="buttons">
            <Link to='/login'>Enter</Link>
        </button>
    </div>
    )
}

export default Home