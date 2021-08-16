import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex flex-col">
      <Link to={'/'} className="py-1">
        Home
      </Link>
      <Link to={'/about'} className="py-1">
        About
      </Link>
      <Link to={'/contact'} className="py-1">
        Contact
      </Link>
      <Link to={'/login'} className="py-1">
        Login
      </Link>
      <Link to={'/text-editor'} className="py-1">
        Text Editor
      </Link>
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
