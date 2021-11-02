import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import Data from './UI/Data';

import MainContainer from './UI/MainContainer';

const App = () => {

  // have a submit function that makes the request to our backend
  // THIS WILL BE REPLACED WITH OAUTH IF WE GET THE CHANCE TO IMPLEMENT

  //want to set up conditional rendering without the navbar but thats okay
  

    return (
      <div>
        <MainContainer/>
        <Data/>
      </div>
    )
}

export default App;