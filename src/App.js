import React from 'react';

import './components/css/App.css';

import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './components/screens/NavBar'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import SignUp from './components/screens/SignUp'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import { useState } from "react"

function App() {
    const [isSigned, setSigned] = useState(false);
  return isSigned ? (
    <BrowserRouter>
        <NavBar />
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
         <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/create">
            <CreatePost/>
        </Route>
        <Route path="/profile">
            <Profile/>
        </Route>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
        <Route exact path='/'>
            <Login isSigned={isSigned} setSigned={setSigned} />
        </Route>
        <Route exact path='/login'>
            <Login isSigned={isSigned} setSigned={setSigned} />
        </Route>
        <Route path='/signup'>
            <SignUp/>
        </Route>
    </BrowserRouter>
  );
}
        /*
        <Route path="/login"> 
            <Login />
        </Route>
        */
export default App;
