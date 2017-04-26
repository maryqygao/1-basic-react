import React from 'react';

import Title from './Header/Title';

export default class Header extends React.Component {
  render() {
    const { ...title } = this.props;
    return (
      <header>
        <Title {...title} />
      </header>
    );
  }
}
