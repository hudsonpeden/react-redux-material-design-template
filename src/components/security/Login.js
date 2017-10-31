import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import { userLogin } from '../../actions/index';

class Login extends Component {

    state = {
        open: true
    }

    handleRequestOpen = () => {
        this.setState({open: true});
    }

    handleRequestClose = () => {
        this.setState({open: false});
    }
    render() {
        return(
            <div>
                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please login to access the system.
                        </DialogContentText>
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    
        {/*
                TODO 
        */}
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">Cancel</Button>
                        <Button onClick={this.props.userLogin} color="primary">Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default connect(null, { userLogin })(Login);