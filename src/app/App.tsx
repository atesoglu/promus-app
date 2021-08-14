import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './layout/Header';
import AppMain from './layout/Main';
import AppFooter from './layout/Footer';

import './App.less';

function App() {
  return (
    <div className="app min-h-screen flex flex-col antialiased text-gray-900">
      <AppHeader />

      <Router>
        <AppMain />
      </Router>

      <AppFooter />
    </div>
  );
}

export default App;
