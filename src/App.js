import React, { Component } from 'react';
import Home from './screens/Home';
import injectSheet from 'react-jss';
import Item from './screens/Item';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
  
class App extends Component{
    render(){
        const classes=this.props.classes;
        return(
            <Router >
                <div className={classes.router}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/item/:id" component={Item} />
                </div>
            </Router>
        );
    }
}
const styles={
    router:{
        height:'100vh',
    }
}

export default injectSheet(styles)(App);
