import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../../components/About';
import Contact from '../../components/Contact';
import Home from '../../components/Home';
import Login from '../../components/Login';

function Main() {
  return (
    <main className="content p-2 bg-white flex-grow">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default Main;
