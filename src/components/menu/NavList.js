import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import  { userLogout }  from '../../actions/index';

import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Divider from 'material-ui/Divider';

//Icons
import Dashboard from 'material-ui-icons/Dashboard';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import GroupWork from 'material-ui-icons/GroupWork';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      background: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });

class NavList extends Component {
    state = { open: true }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    render() {
        const { classes } = this.props;

        return(
            <List className={classes.root}
                  subheader={<ListSubheader>Menu</ListSubheader>}>
                  
                <ListItem button onClick={this.props.userLogout}>Logout</ListItem>

                <Divider /> 
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon><Dashboard/></ListItemIcon>
                        <ListItemText inset primary="Dashboard"><Link to="/"/></ListItemText>
                    </ListItem>
                </Link>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon><GroupWork/></ListItemIcon>
                    <ListItemText inset primary="Group1"/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                    <Link to="/sub1">
                        <ListItem button className={ classes.nested }>
                            <ListItemIcon><Dashboard/></ListItemIcon>
                            <ListItemText inset primary="Sub1"/>
                        </ListItem>
                    </Link>
                    <Link to="/sub2">
                    <ListItem button className={ classes.nested }>
                        <ListItemIcon><Dashboard/></ListItemIcon>
                        <ListItemText inset primary="Sub2"/>
                    </ListItem>
                </Link>
                </Collapse>
                
            </List>
        );
    }
}

export default connect(null, { userLogout })(withStyles(styles)(NavList));
