import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    root: {
      //marginTop: theme.spacing.unit * 3,
      width: '100%',
      colorPrimary: 'blue'
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    bar : {
        colorPrimary: 'blue'
    }
  });

class HeaderBar extends Component 
{
    render()
    {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" className={classes.flex}>
                  Application
                </Typography>
                <Button color="contrast">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        );

    }
}

export default withStyles(styles)(HeaderBar);