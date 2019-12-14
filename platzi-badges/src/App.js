import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Badges from './components/pages/Badges'
import BadgeNew from './components/pages/BadgeNew'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badges/new" component={BadgeNew}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
