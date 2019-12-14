import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './components/Layout'
import Badges from './components/pages/Badges'
import BadgeNew from './components/pages/BadgeNew'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
