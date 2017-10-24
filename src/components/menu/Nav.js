import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sub1 from '../sub/sub1';
import Sub2 from '../sub/sub2';
import Dash from '../sub/dash';

class Nav extends Component {
    render() {
        return(
            <div>


            


            {/**    
            *   Application Content 
            *       React-Router defines what is shown in the body of the page using routes to each sub-application.
            *   
            *       Routes are listed in order from most-specific to least-specific.
            */}
                <BrowserRouter>
                    <Switch>
                        <Route path='/sub1' component={Sub1}/>
                        <Route path='/sub2' component={Sub2}/>
                        <Route path='/' component={Dash}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Nav;