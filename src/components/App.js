import React, { Component } from 'react';

import '../style/App.css';
import Menu from './menu/Menu';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { red, blue, yellow } from 'material-ui/colors';


/** 
 * 
 * GLOBAL APPLICATION THEME!
 * 
*/
const theme = createMuiTheme
({
  palette: 
  {
    primary: blue,
    secondary: yellow,
    error: red 
  }
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Menu/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
