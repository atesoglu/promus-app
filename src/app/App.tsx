import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppHeader from './layout/Header';
import AppMain from './layout/Main';
import AppFooter from './layout/Footer';

import './App.less';

function App() {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        <AppHeader />

        <AppMain />

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
