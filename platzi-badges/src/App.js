import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import Badges from './components/pages/Badges'
import BadgeNew from './components/pages/BadgeNew'

function App() {
  return (
    <BrowserRouter>
      <Route path="/badges" component={Badges}/>
      <Route path="/badges/new" component={BadgeNew}/>
    </BrowserRouter>
  );
}

export default App;
