import React, { Component } from 'react';

import '../style/App.css';
import HeaderBar from './HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
      </div>
    );
  }
}

export default App;
