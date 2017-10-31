import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style/App.css';
//import Menu from './menu/Menu';
import Nav from './menu/Nav';
import Login from './security/Login';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { red, blue, yellow } from 'material-ui/colors';


/** 
 * 
 * GLOBAL APPLICATION THEME!
 * 
*/
const theme = createMuiTheme({
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
        {console.log(this.props.isAuthenticated)}
          {!this.props.isAuthenticated && <Login/>}
          {this.props.isAuthenticated && <Nav/>}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

//Notice that the param for mapStateToProps() is an object 
function mapStateToProps({auth}) {
  return { isAuthenticated: auth.isAuthenticated }
}

export default connect(mapStateToProps)(App);
