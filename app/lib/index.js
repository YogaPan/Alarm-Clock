import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <p>Hello World</p>
    );
  }
}

render(
  <App />,
  document.getElementById('mount')
);
