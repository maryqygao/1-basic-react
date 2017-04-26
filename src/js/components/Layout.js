import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Mary' };
  }

  render() {
    setTimeout(() => {
      this.setState({ name: 'Maria' });
    }, 1000);
    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    );
  }
}
