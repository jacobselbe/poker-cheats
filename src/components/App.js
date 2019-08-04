import React from 'react';

import OpponentSection from './OpponentSection';
import CommunitySection from './CommunitySection';
import PlayerSection from './PlayerSection';

// import actions needed

import logo from '../logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main role="main" className="App">
        <OpponentSection />
        <CommunitySection />
        <PlayerSection />
      </main>
    </div>
  );
}

export default App;