import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames'

//Material UI Imports
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Divider from 'material-ui/Divider';

//

import Sub1 from '../sub/sub1';
import Sub2 from '../sub/sub2';
import Dash from '../sub/dash';
import NavList from './NavList';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      width: '100%',
      //marginTop: theme.spacing.unit * 3,
      zIndex: 1,
      overflow: 'hidden',
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      height: window.height,
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      width: '100%',
      marginLeft: -drawerWidth,
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        content: {
          height: 'calc(100% - 64px)',
          marginTop: 64,
        },
      },
    },
    contentShift: {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  });

class Nav extends Component {

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    render() {
        
        const { classes, theme } = this.props;
        
        return(
            <div className={classes.root}>
                <BrowserRouter>            
                    <div className={classes.appFrame}>
                        <div>
                            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                                <ToolBar disableGutters={!this.state.open}>
                                    <IconButton
                                    color="contrast"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, this.state.open && classes.hide)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    
                                    <Typography type="title" color="inherit" noWrap>Application</Typography>

                                </ToolBar>
                            </AppBar>
                            <Drawer 
                                type="persistent" 
                                classes={{
                                    paper: classes.drawerPaper
                                }} 
                                open={this.state.open}>
                            
                                <div className={classes.drawerInner}>
                                    <div className={classes.drawerHeader}>
                                        <IconButton onClick={this.handleDrawerClose}>
                                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                                        </IconButton>
                                        <Divider/>
                                        <NavList/>
                                    </div>
                                </div>
                            </Drawer>
                        </div>
                        <div className={classes.content}>
                            <Switch>
                                <Route path="/sub1" component={Sub1}/>
                                <Route path="/sub2" component={Sub2}/>
                                <Route path="/" component={Dash}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
            );
    }
}


// Check propTypes for class

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

// Add styles to props
export default withStyles(styles, {withTheme: true})(Nav);