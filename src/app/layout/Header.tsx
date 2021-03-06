import React from 'react';

import logo from '../../logo.svg';
import Navigation from './Navigation';

interface IHeaderProps {
  // user: any;
}
interface IHeaderState {}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    const me = this;
  }

  componentDidMount() {
    const me = this;
  }

  render() {
    const me = this;

    const user = { name: '' };
    return (
      <header className="bg-gray-50 p-2 h-16 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src={logo} className="object-scale-down h-12 pt-1 pr-4 float-left" alt="Promus App | Yet another developer butler" />
            <Navigation />
          </div>

          <div className="text-right">{user.name}</div>
        </div>
      </header>
    );
  }
}
