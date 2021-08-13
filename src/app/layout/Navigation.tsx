import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

function Navigation() {
  return (
    <nav className="flex py-1 divide-x divide-gray-200 text-sm">
      <div className="flex-initial px-3">
        <Link to={'/'}>Home</Link>
      </div>
      <div className="flex-initial px-3">
        <Link to={'/about'}>About</Link>
      </div>
      <div className="flex-initial px-3">
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div className="flex-initial px-3">
        <Link to={'/login'}>Login</Link>
      </div>
    </nav>
  );
}

export default Navigation;

/* export default class Navigation extends React.Component<INavigationProps, INavigationState> {
  state: INavigationState = {
    current: 'home'
  };

  constructor(props: INavigationProps) {
    super(props);

    const me = this;
  }

  onNavigate = (e: any) => {
    const me = this;

    me.setState({ current: e.key });
  };

  render() {
  }
} */
