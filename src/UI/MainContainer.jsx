import React, { useState, useEffect } from "react";

import Navbar from './Navbar'
import Login from'./Login';
import SignUp from'./SignUp';
import Home from './Home';
import PersonalPage from './PersonalPage';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const MainContainer = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/'>
                {loggedIn ? <Redirect to="/personalPage" component={PersonalPage}/> : <Home/>}
            </Route> */}
            <Route exact path='/login' render={() => <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} />
            <Route exact path='/signup' render={() => <SignUp setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} />
            {/* <Route exact path='/signup' component={SignUp}/> */}
            {/* <Route exact path='/personalPage' component={PersonalPage}/> */}
          </Switch>
      </Router>
    )
  } else {
    return (
      <PersonalPage setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      // <Router>
      //   <Switch>
      //   {/* <Route exact path='/' component={PersonalPage}/> */}
      //     <PersonalPage  />
      //   </Switch>
      // </Router>
    )
  }
}

export default MainContainer