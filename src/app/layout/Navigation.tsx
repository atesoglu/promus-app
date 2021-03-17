import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

interface INavigationProps {}

interface INavigationState {
  current: string;
}

export default class Navigation extends React.Component<INavigationProps, INavigationState> {
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
    const { current } = this.state;

    return (
      // <Menu onClick={this.onNavigate} selectedKeys={[current]} mode="horizontal">
      //   <Menu.Item key="mail">Navigation One</Menu.Item>
      //   <Menu.Item key="app">Navigation Two</Menu.Item>
      //   <SubMenu key="SubMenu" title="Navigation Three - Submenu">
      //     <Menu.ItemGroup title="Item 1">
      //       <Menu.Item key="setting:1">Option 1</Menu.Item>
      //       <Menu.Item key="setting:2">Option 2</Menu.Item>
      //     </Menu.ItemGroup>
      //     <Menu.ItemGroup title="Item 2">
      //       <Menu.Item key="setting:3">Option 3</Menu.Item>
      //       <Menu.Item key="setting:4">Option 4</Menu.Item>
      //     </Menu.ItemGroup>
      //   </SubMenu>
      //   <Menu.Item key="alipay">
      //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      //       Navigation Four - Link
      //     </a>
      //   </Menu.Item>
      // </Menu>

      <nav className="flex divide-x divide-gray-200 text-sm">
        <div className="flex-initial p-3">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="flex-initial p-3">
          <Link to={'/about'}>About</Link>
        </div>
        <div className="flex-initial p-3">
          <Link to={'/contact'}>Contact</Link>
        </div>
        <div className="flex-initial p-3">
          <Link to={'/login'}>Login</Link>
        </div>
      </nav>
    );
  }
}
