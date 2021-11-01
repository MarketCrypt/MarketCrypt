import React, {useState} from "react"

import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div>
            <button>
                <Link to='/login'>Login</Link>
            </button> 
            <button>
                <Link to='/signup'>Sign Up</Link>
            </button>
        </div>
    )
}

export default Navbar