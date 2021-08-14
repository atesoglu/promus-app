import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Aside from './Aside';

import About from '../../components/About';
import Contact from '../../components/Contact';
import Home from '../../components/Home';
import Login from '../../components/Login';

function Main() {
  return (
    <Fragment>
      <main className="flex content bg-white flex-grow">
        <Aside />
        <div className="flex-auto p-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
