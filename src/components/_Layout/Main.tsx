import React from 'react';

import { Button, DatePicker, version } from 'antd';

export default class Main extends React.Component {
  render() {
    return (
      <main className="content p-2 bg-white flex-grow">
        <h5>antd version: {version}</h5>

        <DatePicker />

        <Button type="primary" className="m-0">
          {' '}
          Primary Button{' '}
        </Button>
      </main>
    );
  }
}
