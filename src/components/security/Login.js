import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
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

    render() {
        return(
            <div>
                <Dialog 
                    open={this.state.open} 
                    onRequestClose={this.handleRequestClose}
                    ignoreBackdropClick={true} >
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please login to access the application.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.userLogin} color="primary">Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default connect(null, { userLogin })(Login);