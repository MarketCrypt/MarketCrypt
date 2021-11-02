import React, { useState } from "react";

import Navbar from './Navbar'
import Login from'./Login';
import SignUp from'./SignUp';
import Home from './Home';
import PersonalPage from './PersonalPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainContainer = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' render={() => <Login setLoggedIn={setLoggedIn}/>} />
            <Route exact path='/signup' component={SignUp}/>
            {/* <Route exact path='/personalPage' component={PersonalPage}/> */}
          </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <PersonalPage/>
      </Router>
    )
  }
}

export default MainContainer