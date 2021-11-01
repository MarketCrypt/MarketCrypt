import React from "react";

import Navbar from './Navbar'
import Login from'./Login';
import SignUp from'./SignUp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const MainContainer = () => {
    return (
        <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
          </Switch>

        </div>
      </Router>
    )
}

export default MainContainer