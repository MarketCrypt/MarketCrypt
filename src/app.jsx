import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from'./UI/Login';
import SignUp from'./UI/SignUp';

const App = () => {

  const [change, setChange] = useState(true)

  // have a submit function that makes the request to our backend
  // THIS WILL BE REPLACED WITH OAUTH IF WE GET THE CHANCE TO IMPLEMENT
  // if (change) { 
    return (
      <Router>
        <div>

          <button>
            <Link to='/login'>Login</Link>
          </button> 
          <button>
            <Link to='/signup'>Sign Up</Link>
          </button>

          <Switch>
            <Route onClick={() => {console.log('hello'))} exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
          </Switch>

        </div>
      </Router>
    )
//  } 
}

export default App;