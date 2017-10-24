import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
//import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
//import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 1000,
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
    marginLeft: "-87.5%",
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
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
  loginButton: {
    marginLeft: "80%",
    width: 50
  },
  appBarItems: {
    margin: '1%'
  }
});


class Menu extends Component 
{
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <Grid container spacing={25} >
                  <Grid item xs >
                      <IconButton
                      color="contrast"
                      aria-label="open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, this.state.open && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <Typography type="title" color="inherit" noWrap className={classes.appBarItems} >
                      Application
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Button className={classNames(classes.loginButton, classes.appBarItems)} color="contrast">Login</Button>
                  </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer
            type="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {/* 
                    
                    TODO 
                    theme.direction === 'rtl' ? */<ChevronLeftIcon /> /*: <ChevronLeftIcon />*/}
                </IconButton>
              </div>
              <Divider />
            </div>
          </Drawer>

      {/**
        * APP MAIN CONTENT
        */}

          <main className={classNames(classes.content, this.state.open && classes.contentShift)}>
            <Typography type="body1" noWrap>
              {'App content goes here'}
            </Typography>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);