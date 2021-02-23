import React from 'react';

import AppHeader from './components/_Layout/Header';
import AppMain from './components/_Layout/Main';
import AppFooter from './components/_Layout/Footer';

import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="app min-h-screen flex flex-col">
        <AppHeader />

        <AppMain />

        <AppFooter />
      </div>
    );
  }
}
