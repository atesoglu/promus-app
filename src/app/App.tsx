import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppHeader from './layout/Header';
import AppMain from './layout/Main';
import AppFooter from './layout/Footer';

import './App.less';

interface IAppProps {}
interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  readonly state: IAppState = {};

  constructor(props: IAppProps) {
    super(props);

    const me = this;
  }

  // componentDidMount() {
  //   const me = this;

  //   axios
  //     .get('http://jsonplaceholder.typicode.com/users/1')
  //     .then((res) => {
  //       me.setState({ user: res.data });

  //       console.log('App.componentDidMount.state: ', me.state.user);
  //     })
  //     .catch((error) => {})
  //     .then(() => {});
  // }

  render() {
    const me = this;

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
}
