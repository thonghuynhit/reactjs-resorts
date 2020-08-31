import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/rooms/" exact component={ Rooms } />
        <Route path="/rooms/:single" exact component={ SingleRoom } />
        <Route component={ Error } />
      </Switch>
    </>
  );
}

export default App;
