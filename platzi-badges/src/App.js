import React from 'react';
import './App.css';

import Badge from './components/Badge'

function App() {
  return (
    <div className="App">
      <Badge 
        firstName="Juan D."
        lastName="Reyes P."
        jobTitle="Frontend Engineer"
      />
    </div>
  );
}

export default App;
